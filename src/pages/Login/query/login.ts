import { gql } from '@apollo/client';

export const MAKE_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password })
  }
`;
