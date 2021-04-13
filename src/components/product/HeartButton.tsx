import { gql } from '@apollo/client';
import { ReactComponent as HeartSVG } from '../../assets/svg/heart.svg';
import styled from "styled-components";
import {
  useAddCartMutation,
} from '../../generated/graphql';

interface PropsType {
  id: string,
  isActive?: boolean
}

const ADD_CART_QUERY = gql`
  mutation AddCart($productId: String) {
    addCart(productId: $productId) {
      code
    }
  }
`;

const HeartButtonComponent = ({ id, isActive = false } : PropsType) => {
  const [addCartMutation, { loading }] = useAddCartMutation({
    variables: {
      productId: id,
    }
  });
  const handleMutation = () => {
    addCartMutation();
  };
  return (
    <HeartBtn isActive={isActive} onClick={handleMutation}>
      <SvgBtn>
        <HeartSVG/>
      </SvgBtn>
    </HeartBtn>
  );
};

const HeartBtn = styled.button<{isActive: boolean}>`
  border-radius: 3px;
  width: 32px;
  height: 32px;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  svg{
    width: 24px;
    height: 24px;
    path{
      fill: ${ props => props.isActive ? '#ff3478' : '#fff'};
    }
  }
`;

const SvgBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  border-radius: 32px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default HeartButtonComponent;