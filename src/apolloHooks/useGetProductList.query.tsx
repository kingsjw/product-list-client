import { gql } from '@apollo/client';
import { useEffect } from 'react';
import {
  useProductListQuery,
} from './useGetProductList.query.generated';

export type { ProductListQuery } from './useGetProductList.query.generated';

export const GET_PRODUCT_QUERY = gql`
  query ProductList($page: Int) {
    productData(page: $page) {
      products {
        id
        title
        price
        coverImage
        liked
      }
      page
      totalCount
    }
  }
`;

export function useGetProductList() {
  const { data, loading, fetchMore } = useProductListQuery({
    query: GET_PRODUCT_QUERY,
    variables: { page: 1 },
  });
  
  useEffect(() => {
    console.log('a mount');
    return () => {
      console.log('a un mount');
    }
  }, [])

  return {
    data: {
      products: data?.productData?.products || [],
      page: data?.productData?.page,
      totalCount: data?.productData?.totalCount,
    },
    loading,
    fetchMore,
  };
};