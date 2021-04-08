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

export type ProductRecommendResp = {
  __typename?: 'ProductRecommendResp';
  products?: Maybe<Array<Product>>;
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
  productRecommendData?: Maybe<ProductRecommendResp>;
};


export type QueryProductDataArgs = {
  page?: Maybe<Scalars['Int']>;
};


export type ProductRecommendQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductRecommendQuery = (
  { __typename?: 'Query' }
  & { productRecommendData?: Maybe<(
    { __typename?: 'ProductRecommendResp' }
    & { products?: Maybe<Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'title' | 'price' | 'coverImage'>
    )>> }
  )> }
);

export type ProductListQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
}>;


export type ProductListQuery = (
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


export const ProductRecommendDocument = gql`
    query productRecommend {
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
export const ProductListDocument = gql`
    query productList($page: Int) {
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