import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography
} from '@material-ui/core';
import React from 'react';

export function LinearProgressWithLabel(
  props: LinearProgressProps & {
    value: number;
    levelXp: number;
    totalXp: number;
  }
) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" width="100%" justifyContent="space-between">
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.totalXp
        )}XP`}</Typography>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.levelXp
        )}XP`}</Typography>
      </Box>

      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}
