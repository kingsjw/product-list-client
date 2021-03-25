import styled from 'styled-components';
import ProductItem from './ProductItem';

interface listDataType {
  id: string,
  title: string,
  price: number,
  coverImage: string,
  score: number,
  availableCoupon?: boolean
};

interface PropsType {
  title?: string,
  productList: listDataType[]
}

const ProductListComponent = (props: PropsType) => {
  const { title, productList } =  props;
  const width = `${Math.ceil(100 / productList.length) > 4 ? 25 : 100 / productList.length}%`; 
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
                  width={width}
                />
              )
            )
          }
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  width: ${ props => props.theme.wrapWidth };
  margin: 24px auto;
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

export default ProductListComponent;
