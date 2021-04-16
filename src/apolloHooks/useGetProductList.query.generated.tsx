import * as Types from '../graphql-types';

import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
export type ProductListQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ProductListQuery = (
  { readonly __typename?: 'Query' }
  & { readonly productData?: Types.Maybe<(
    { readonly __typename?: 'ProductResp' }
    & Pick<Types.ProductResp, 'page' | 'totalCount'>
    & { readonly products?: Types.Maybe<ReadonlyArray<(
      { readonly __typename?: 'Product' }
      & Pick<Types.Product, 'id' | 'title' | 'price' | 'coverImage' | 'liked'>
    )>> }
  )> }
);


export const ProductListDocument = gql`
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
export type ProductListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductListQuery, ProductListQueryVariables>, 'query'>;

    export const ProductListComponent = (props: ProductListComponentProps) => (
      <ApolloReactComponents.Query<ProductListQuery, ProductListQueryVariables> query={ProductListDocument} {...props} />
    );
    

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;