import ProductList from '../views/product/ProductList';
import { useGetProductRecommendList } from '../view-models/useGetProductRecommend.query'

const HomeContainer = () => {
  const { data, loading } = useGetProductRecommendList();
  const { products } = data;

  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={ products }
      loading={ loading }
    />
  );
};

export default HomeContainer;
