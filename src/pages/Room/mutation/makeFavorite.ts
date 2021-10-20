import { gql } from '@apollo/client';

export const MAKE_FAVORITE = gql`
  mutation MakeFavorite($room_id: Float!) {
    createFavoriteRoomForUser(room_id: $room_id) {
      favorite_room_id
    }
  }
`;
