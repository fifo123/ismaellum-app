import React from 'react';
import { Typography, TypographyProps } from './styles';
import { TypographyProps as MuiTypoProps } from '@material-ui/core';

type Props = TypographyProps & MuiTypoProps;
export function UiTypography(props: Props) {
  return <Typography {...props} />;
}
