import { useState } from 'react';
import ProductList from '../components/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';
import {
  useProductsQuery,
} from '../generated/graphql';

const ProductContainer = () => {
  const { data, loading } = useProductsQuery({
    fetchPolicy: "cache-first",
  });
  
  const [loadTarget, setLoadTarget] = useState<HTMLDivElement | null>(null);

  useInfinteScroll({
    target: loadTarget,
    onIntersect: ([{ isIntersecting }] : any) => {
      if (isIntersecting && !loading) {
        // TODO: apollo server에서 pagination query 만들어서 더 부른다
      }
    },
  });

  return (
    <ProductList
      title={ "상품 목록" }
      productList={ data?.products ?? [] }
      loading={ loading }
      setLoadTarget={ setLoadTarget }
    />
  );
};

export default ProductContainer;
