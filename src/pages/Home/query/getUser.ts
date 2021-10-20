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
      favoriteRooms {
        favorite_room_id
        room {
          room_id
          number
          description
          picture
        }
      }
      lastRooms {
        room_id
        number
        description
        picture
      }
    }
  }
`;
