import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User {
    user {
      user_id
      name
      email
      stats {
        credits
        totalXp
        level
        currentXp
        levelXp
      }
    }
  }
`;
