import ProductList from '../views/product/ProductList';
import { useGetProductRecommendList } from '../apolloHooks/useGetProductRecommend.query'
import styled from 'styled-components';
import Spinner from '../components/common/Spinner';

const HomeContainer = () => {
  const { data, loading } = useGetProductRecommendList();
  const { products } = data;
  if (loading) {
    return <LoadingSpinner><Spinner/></LoadingSpinner>;
  }
  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={ products }
      loading={ loading }
    />
  );
};

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export default HomeContainer;
