import { gql } from '@apollo/client';

export const ADD_CART_QUERY = gql`
  mutation AddCart($productId: String) {
    addCart(productId: $productId) {
      code
    }
  }
`;

export function useAddcart() {}