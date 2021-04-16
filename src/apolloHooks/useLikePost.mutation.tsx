import { gql } from '@apollo/client';
import { useLikePostMutation } from './useLikePost.mutation.generated';

export const LIKE_POST_MUTATION = gql`
  mutation LikePost($productId: String) {
    likePost(productId: $productId) {
      liked
    }
  }
`;

export function useLikePost(productId: string) {
  const [likePost, { loading }] = useLikePostMutation({
    variables: {
      productId,
    },
  });

  return {
    likePost,
    loading,
  };
};
