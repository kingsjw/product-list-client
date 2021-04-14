import { gql } from '@apollo/client';
import {
  useProductRecommendQuery,
} from './useGetProductRecommend.query.generated';

export const PRODUCT_RECOMMEND_QUERY = gql`
  query ProductRecommend {
    productRecommendData {
      products {
        id
        title
        price
        coverImage
      }
    }
  }
`;

export function useGetProductRecommendList() {
  const { data, loading } = useProductRecommendQuery({
    query: PRODUCT_RECOMMEND_QUERY,
  });
  return {
    data: {
      products: data?.productRecommendData?.products || [],
    },
    loading,
  };
};