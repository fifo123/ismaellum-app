import React from 'react';
import { Box, BoxProps } from '@material-ui/core';

type Props = BoxProps;
export function UiBox(props: Props) {
  return <Box {...props} />;
}
