import { useState } from 'react';
import ProductList from '../views/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';
import { useGetProductList } from '../view-models/useGetProductList.query';

const ProductContainer = () => {
  const { data, loading, fetchMore } = useGetProductList();
  const { products, totalCount, page } = data;
  const [loadTarget, setLoadTarget] = useState<HTMLDivElement | null>(null);

  useInfinteScroll({
    target: loadTarget,
    onIntersect: ([{ isIntersecting }] : any) => {
      if (isIntersecting && !loading && totalCount && products && totalCount > products.length) {
        fetchMore({
          variables: { page: (page || 1) + 1 },
        })
      }
    },
  });

  return (
    <ProductList
      title={ "상품 목록" }
      productList={ products }
      loading={ loading }
      setLoadTarget={ setLoadTarget }
    />
  );
};

export default ProductContainer;
