import { useEffect, useState } from 'react';
import { getRecommendProductApi } from '../api/api';
import ProductList from '../components/product/ProductList';

const HomeContainer = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getRecommendProductApi().then(({ data }: any) => {
      setProductList(data);
      setLoading(false);
    });
  }, []);

  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={ productList }
      loading={ loading }
    />
  );
};

export default HomeContainer;
