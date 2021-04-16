export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export type LikedResp = {
  readonly __typename?: 'LikedResp';
  readonly liked?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly likePost?: Maybe<LikedResp>;
};


export type MutationlikePostArgs = {
  productId?: Maybe<Scalars['String']>;
};

export type Product = {
  readonly __typename?: 'Product';
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly coverImage: Scalars['String'];
  readonly price: Scalars['Int'];
  readonly liked: Scalars['Boolean'];
};

export type ProductRecommendResp = {
  readonly __typename?: 'ProductRecommendResp';
  readonly products?: Maybe<ReadonlyArray<Product>>;
};

export type ProductResp = {
  readonly __typename?: 'ProductResp';
  readonly products?: Maybe<ReadonlyArray<Product>>;
  readonly page?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly productData?: Maybe<ProductResp>;
  readonly productRecommendData?: Maybe<ProductRecommendResp>;
};


export type QueryproductDataArgs = {
  page?: Maybe<Scalars['Int']>;
};

