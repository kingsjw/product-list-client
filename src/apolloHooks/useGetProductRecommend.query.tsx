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
        liked
      }
    }
  }
`;

export function useGetProductRecommendList() {
  const { data, loading } = useProductRecommendQuery();
  return {
    data: {
      products: data?.productRecommendData?.products || [],
    },
    loading,
  };
};