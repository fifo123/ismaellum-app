import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    listProductCategory {
      category {
        name
        description
      }
      product {
        product_id
        description
        name
        picture
        creditsPrice
      }
    }
  }
`;
