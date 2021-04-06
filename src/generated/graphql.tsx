import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addProduct?: Maybe<Product>;
};


export type MutationAddProductArgs = {
  product?: Maybe<ProductInput>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  coverImage: Scalars['String'];
  price: Scalars['Int'];
};

export type ProductInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  coverImage: Scalars['String'];
  price: Scalars['Int'];
};

export type ProductResp = {
  __typename?: 'ProductResp';
  products?: Maybe<Array<Product>>;
  page?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  productData?: Maybe<ProductResp>;
};


export type QueryProductDataArgs = {
  page?: Maybe<Scalars['Int']>;
};


export type ProductListQueryQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
}>;


export type ProductListQueryQuery = (
  { __typename?: 'Query' }
  & { productData?: Maybe<(
    { __typename?: 'ProductResp' }
    & Pick<ProductResp, 'page' | 'totalCount'>
    & { products?: Maybe<Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'title' | 'price' | 'coverImage'>
    )>> }
  )> }
);


export const ProductListQueryDocument = gql`
    query productListQuery($page: Int) {
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

/**
 * __useProductListQueryQuery__
 *
 * To run a query within a React component, call `useProductListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQueryQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useProductListQueryQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQueryQuery, ProductListQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQueryQuery, ProductListQueryQueryVariables>(ProductListQueryDocument, options);
      }
export function useProductListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQueryQuery, ProductListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQueryQuery, ProductListQueryQueryVariables>(ProductListQueryDocument, options);
        }
export type ProductListQueryQueryHookResult = ReturnType<typeof useProductListQueryQuery>;
export type ProductListQueryLazyQueryHookResult = ReturnType<typeof useProductListQueryLazyQuery>;
export type ProductListQueryQueryResult = Apollo.QueryResult<ProductListQueryQuery, ProductListQueryQueryVariables>;