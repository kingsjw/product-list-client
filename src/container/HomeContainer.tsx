import { gql } from '@apollo/client';
import ProductList from '../components/product/ProductList';
import { useProductRecommendQuery } from '../generated/graphql'

const productRecommendQuery = gql`
  query productRecommend {
    productRecommendData {
      products {
        id
        title
        price
        coverImage
      }
    }
  }
`;

const HomeContainer = () => {
  const { data, loading } = useProductRecommendQuery({
    query: productRecommendQuery,
  });

  const productList = data?.productRecommendData?.products || [];

  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={ productList }
      loading={ loading }
    />
  );
};

export default HomeContainer;
