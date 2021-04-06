import { gql } from '@apollo/client';
import { useState } from 'react';
import ProductList from '../components/product/ProductList';
import useInfinteScroll from '../helper/useInfinteScroll';
import {
  useProductListQueryQuery,
} from '../generated/graphql';

const PRODUCT_QUERY = gql`
  query productListQuery($page: Int) {
    productData(page: $page) {
      products {
        id
        title
        price
        coverImage
      }
      page
      totalCount
    }
  }
`;

const ProductContainer = () => {
  const { data, loading, fetchMore } = useProductListQueryQuery({
    query: PRODUCT_QUERY,
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });
  const [loadTarget, setLoadTarget] = useState<HTMLDivElement | null>(null);

  const page = data?.productData?.page;
  const totalCount = data?.productData?.totalCount;
  const products = data?.productData?.products;

  useInfinteScroll({
    target: loadTarget,
    onIntersect: ([{ isIntersecting }] : any) => {
      if (isIntersecting && !loading && totalCount && products && totalCount > products.length) {
        // TODO: apollo server에서 pagination query 만들어서 더 부른다
        fetchMore({
          variables: { page: (page || 1) + 1 },
        })
      }
    },
  });

  return (
    <ProductList
      title={ "상품 목록" }
      productList={ products ?? [] }
      loading={ loading }
      setLoadTarget={ setLoadTarget }
    />
  );
};

export default ProductContainer;
