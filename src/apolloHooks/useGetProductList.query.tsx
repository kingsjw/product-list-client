import { gql } from '@apollo/client';
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

export default function useGetProductList() {
  const { data, loading, fetchMore } = useProductListQuery({
    variables: { page: 1 },
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