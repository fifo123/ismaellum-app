import { BoxProps } from '@material-ui/core';
import React from 'react';
import { Cover } from './styles';

type CoverProps = {
  hidden?: boolean;
  onClose: () => void;
} & BoxProps;

export function UiCover({ hidden = true, onClose, children }: CoverProps) {
  return (
    <Cover
      hidden={hidden}
      justifyContent="center"
      alignItems="center"
      onClick={onClose}
    >
      {children}
    </Cover>
  );
}
