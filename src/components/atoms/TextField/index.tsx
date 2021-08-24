import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

export function UiTextField({ ...rest }: TextFieldProps) {
  return <TextField {...rest} />;
}
