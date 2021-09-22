import { Box } from '@material-ui/core';
import React from 'react';
import NewProcedure from '../../../shared/assets/new-procedure.svg';
import { Cover, Typography } from './styles';

interface CoverProps {
  creditsQuantity?: number;
  xpQuantity?: number;
  hidden?: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UiCover({
  creditsQuantity = 0,
  xpQuantity = 0,
  hidden = true,
  setHidden
}: CoverProps) {
  return (
    <Cover
      display={hidden ? 'none' : 'flex'}
      justifyContent="center"
      alignItems="center"
      onClick={() => setHidden(true)}
    >
      <Typography variant="h3" align="center" fontColor="white">
        Você acabou de realizar um procedimento.
      </Typography>
      <Box display="flex" justifyContent="center" style={{ margin: '40px' }}>
        <img src={NewProcedure} />
      </Box>
      <Typography variant="h3" align="center" fontColor="white">
        Por ter feito todos os procedimentos corretos você ganhou:
      </Typography>
      <Typography
        variant="h3"
        color="secondary"
        align="center"
        style={{ fontWeight: 'bold', margin: '10px' }}
      >
        +{creditsQuantity} créditos
      </Typography>
      <Typography
        variant="h3"
        color="secondary"
        align="center"
        style={{ fontWeight: 'bold', margin: '10px' }}
      >
        +{xpQuantity} xp
      </Typography>
    </Cover>
  );
}
