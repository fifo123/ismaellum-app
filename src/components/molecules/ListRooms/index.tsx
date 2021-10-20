import { Box } from '@material-ui/core';
import React from 'react';
import { ListItems } from '../../../pages/Home/styles';
import { RoomCards } from '../../atoms/RoomCards';
import { UiTypography } from '../../atoms/Typography';

type ListRoomsProps = {
  category: string;
  roomCards: {
    name: string;
    subtitle: string;
    image: string;
    onClickCard: () => void;
  }[];
};

export function ListRooms({ category, roomCards }: ListRoomsProps) {
  return (
    <>
      <UiTypography variant="h5" fontColor="secondary">
        {category}
      </UiTypography>
      <Box mb={2} />
      <ListItems>
        {roomCards.map((room) => (
          <RoomCards
            name={room.name}
            subtitle={room.subtitle}
            image={room.image}
            key={room.name}
            onClickCard={room.onClickCard}
          />
        ))}
      </ListItems>
    </>
  );
}
