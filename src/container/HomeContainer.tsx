import { useEffect, useState } from 'react';
import { getRecommendProductApi } from '../api/api';
import ProductList from '../components/product/ProductList';

const ProductContainer = () => {
  const [productList, setProductList] = useState<any[]>([]);
  useEffect(() => {
    getRecommendProductApi().then(({ data }: any) => {
      setProductList(data);
    });
  }, []);

  return (
    <ProductList
      title={ "kingsjw 추천 상품" }
      productList={productList}
    />
  );
};

export default ProductContainer;
