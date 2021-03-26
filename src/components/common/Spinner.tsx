import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size?: number,
};

const Spinner = ({ size = 24 }: SpinnerProps) => (
  <StyledSpinner viewBox="0 0 50 50" size={ `${size}px` }>
    <Circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const RotateAni = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const DashAni = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledSpinner = styled.svg<{ size: string }>`
  animation: ${RotateAni} 2s linear infinite;
  width: ${ props => props.size };
  height: ${ props => props.size };
`;
const Circle = styled.circle`
  stroke: #cdcdcd;
  stroke-linecap: round;
  animation: ${DashAni} 1.5s ease-in-out infinite;
`;


export default Spinner;