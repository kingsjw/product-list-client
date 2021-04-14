import * as Types from '../graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type ProductRecommendQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductRecommendQuery = (
  { readonly __typename?: 'Query' }
  & { readonly productRecommendData?: Types.Maybe<(
    { readonly __typename?: 'ProductRecommendResp' }
    & { readonly products?: Types.Maybe<ReadonlyArray<(
      { readonly __typename?: 'Product' }
      & Pick<Types.Product, 'id' | 'title' | 'price' | 'coverImage'>
    )>> }
  )> }
);


export const ProductRecommendDocument = gql`
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
export type ProductRecommendComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductRecommendQuery, ProductRecommendQueryVariables>, 'query'>;

    export const ProductRecommendComponent = (props: ProductRecommendComponentProps) => (
      <ApolloReactComponents.Query<ProductRecommendQuery, ProductRecommendQueryVariables> query={ProductRecommendDocument} {...props} />
    );
    

/**
 * __useProductRecommendQuery__
 *
 * To run a query within a React component, call `useProductRecommendQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductRecommendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductRecommendQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductRecommendQuery(baseOptions?: Apollo.QueryHookOptions<ProductRecommendQuery, ProductRecommendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductRecommendQuery, ProductRecommendQueryVariables>(ProductRecommendDocument, options);
      }
export function useProductRecommendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductRecommendQuery, ProductRecommendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductRecommendQuery, ProductRecommendQueryVariables>(ProductRecommendDocument, options);
        }
export type ProductRecommendQueryHookResult = ReturnType<typeof useProductRecommendQuery>;
export type ProductRecommendLazyQueryHookResult = ReturnType<typeof useProductRecommendLazyQuery>;
export type ProductRecommendQueryResult = Apollo.QueryResult<ProductRecommendQuery, ProductRecommendQueryVariables>;