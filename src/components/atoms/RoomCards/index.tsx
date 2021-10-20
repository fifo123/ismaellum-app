import React from 'react';
import { RoomContainer, RoomTitle } from './styles';

type RoomCardsProps = {
  name: string;
  image: string;
  subtitle: string;
  onClickCard: () => void;
};

export function RoomCards({
  name,
  image,
  subtitle,
  onClickCard
}: RoomCardsProps) {
  return (
    <RoomContainer image={image} onClick={onClickCard}>
      <RoomTitle>
        <label>{name}</label>
        <label htmlFor="label">{subtitle}</label>
      </RoomTitle>
    </RoomContainer>
  );
}
