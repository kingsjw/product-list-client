import styled from 'styled-components';

const Notfound = () => {
  return (
    <Wrapper>페이지를 찾을 수 없습니다.</Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 20px;
  color: #ccc;
  padding: 120px 0;
  font-weight: 600;
  text-align: center;
`;

export default Notfound;