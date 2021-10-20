import { gql } from '@apollo/client';

export const BUY_PRODUCT = gql`
  mutation BuyProduct($product_id: Float!) {
    createProductHistoryForUser(product_id: $product_id) {
      product {
        product_id
      }
    }
  }
`;
