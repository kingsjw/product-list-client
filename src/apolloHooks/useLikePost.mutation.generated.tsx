import * as Types from '../graphql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type LikePostMutationVariables = Types.Exact<{
  productId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type LikePostMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly setLikeProduct?: Types.Maybe<(
    { readonly __typename?: 'setLikeProductResp' }
    & { readonly product?: Types.Maybe<(
      { readonly __typename?: 'Product' }
      & Pick<Types.Product, 'id' | 'liked'>
    )> }
  )> }
);


export const LikePostDocument = gql`
    mutation LikePost($productId: String) {
  setLikeProduct(productId: $productId) {
    product {
      id
      liked
    }
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;
export type LikePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LikePostMutation, LikePostMutationVariables>, 'mutation'>;

    export const LikePostComponent = (props: LikePostComponentProps) => (
      <ApolloReactComponents.Mutation<LikePostMutation, LikePostMutationVariables> mutation={LikePostDocument} {...props} />
    );
    

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;