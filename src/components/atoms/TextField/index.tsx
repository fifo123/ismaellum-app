import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import { TextField } from './styles';

export function UiTextField({ ...rest }: TextFieldProps) {
  return <TextField {...rest} />;
}
