import React from 'react';

import { ProductContainer } from './styles';

type ProductItemProps = {
  name: string;
  image?: string;
  onClickCard?: () => void;
  fullWidth?: boolean;
  subtitle?: string;
};

export function ProductItem({
  name,
  image,
  onClickCard,
  fullWidth = false,
  subtitle
}: ProductItemProps) {
  return (
    <ProductContainer onClick={onClickCard} fullWidth={fullWidth}>
      <img src={image} />
      {name}
      <div>{subtitle}</div>
    </ProductContainer>
  );
}
