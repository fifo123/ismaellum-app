import React from 'react';
import { Paper, PaperProps } from '@material-ui/core';

export function UiPaper({ children }: PaperProps) {
  return (
    <Paper style={{ width: '328px', height: '342px' }} elevation={3}>
      {children}
    </Paper>
  );
}
