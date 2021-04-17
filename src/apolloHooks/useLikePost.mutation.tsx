import { gql } from '@apollo/client';
import { GET_PRODUCT_QUERY } from './useGetProductList.query';
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
    update(cache) {
      const { productData } = cache.readQuery({ query: GET_PRODUCT_QUERY }) || {};
      const item = productData.products.find(({ id }: any) => id === productId );
      if (item) {
        cache.modify({
          id: cache.identify(item),
          fields: {
            liked: (val) => !val
          }
        })
      }
    },
  });

  return {
    likePost,
    loading,
  };
};
