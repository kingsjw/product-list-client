import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Dispatch, SetStateAction } from "react";
import Spinner from '../../components/common/Spinner';
import { ProductData } from '../../type/product';

interface PropsType {
  title?: string
  productList: readonly ProductData[]
  setLoadTarget?: Dispatch<SetStateAction<null | HTMLDivElement>>
  isMaxPage?: boolean
  loading?: boolean
};

const ProductListComponent = (props: PropsType) => {
  const { title, productList, setLoadTarget, isMaxPage, loading } =  props;
  return (
    <Wrapper>
      <Container>
        <Title>{ title }</Title>
        <List>
          {
            productList.map(({ id, title, price, coverImage }) => (
                <ProductItem
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  coverImage={coverImage}
                />
              )
            )
          }
        </List>
      </Container>
      { isMaxPage ? <LastMessage>모든 상품을 보여드렸습니다.</LastMessage> : <ListBottom ref={ isMaxPage ? null : setLoadTarget }/> }
      { loading && <LoadingSpinner><Spinner/></LoadingSpinner> }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 20px;
`;

const Container = styled.div`
  width: ${ props => props.theme.wrapWidth };
  margin: 10px auto;
`;

const Title = styled.div`
  padding: 16px 10px;
  font-size: 18px;
  font-weight: 600;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ListBottom = styled.div`
  width: 100%;
  height: 20px;
`;

const LastMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ccc;
  padding: 10px 0 30px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export default ProductListComponent;
