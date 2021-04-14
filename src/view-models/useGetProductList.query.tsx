import { gql } from '@apollo/client';
import {
  useProductListQuery,
} from './useGetProductList.query.generated';

export const PRODUCT_QUERY = gql`
  query ProductList($page: Int) {
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

export function useGetProductList() {
  const { data, loading, fetchMore } = useProductListQuery({
    query: PRODUCT_QUERY,
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });
  
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