import { useState } from 'react';
import ProductList from '../views/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';
import useGetProductList from '../apolloHooks/useGetProductList.query';
import Spinner from '../components/common/Spinner';
import styled from 'styled-components';

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
        });
      }
    },
  });

  if (loading) {
    return <LoadingSpinner><Spinner/></LoadingSpinner>;
  }
  return (
    <ProductList
      title={ "상품 목록" }
      productList={ products }
      setLoadTarget={ setLoadTarget }
    />
  );
};

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;


export default ProductContainer;
