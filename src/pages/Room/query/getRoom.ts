import { gql } from '@apollo/client';

export const GET_ROOM = gql`
  query Room($room_id: Float!) {
    room(room_id: $room_id) {
      room_id
      number
      room_id
      picture
      description
      createdAt
      updatedAt
      roomProcedures {
        room_procedure_id
        procedure {
          description
          procedure_id
          picture
          name
        }
      }
      history {
        createdAt
        totalCredits
        procedure_history_id
      }
      isFavorite
    }
  }
`;
