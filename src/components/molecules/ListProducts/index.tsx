import { Box } from '@material-ui/core';
import React from 'react';
import { ListItems } from '../../../pages/Home/styles';
import { ProductItem } from '../../atoms/ProductItem';
import { UiTypography } from '../../atoms/Typography';
import * as S from './styles';
type ListProductsProps = {
  category: string;
  productsCards: {
    name: string;
    image: string;
    onClickCard?: () => void;
    subtitle?: string;
  }[];
};

export function ListProducts({ category, productsCards }: ListProductsProps) {
  return (
    <>
      <UiTypography variant="h5" fontColor="secondary">
        {category}
      </UiTypography>
      <Box mb={2} />
      <ListItems>
        {productsCards.map((product) => (
          <>
            <ProductItem
              name={product.name}
              image={product.image}
              key={product.name}
              onClickCard={product.onClickCard}
              subtitle={product.subtitle}
            />
            <S.Divider />
          </>
        ))}
      </ListItems>
    </>
  );
}
