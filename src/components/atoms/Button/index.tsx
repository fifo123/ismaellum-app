import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

export function UiButton({ ...rest }: ButtonProps) {
  return <Button {...rest} />;
}
