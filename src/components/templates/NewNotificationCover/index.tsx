import React from 'react';
import NewProcedure from '../../../shared/assets/new-procedure.svg';
import { UiBox } from '../../atoms/Box';
import { UiCover } from '../../atoms/Cover';
import { UiTypography } from '../../atoms/Typography';

interface CoverProps {
  creditsQuantity?: number;
  xpQuantity?: number;
  hidden?: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NewNotificationCover({
  creditsQuantity = 0,
  xpQuantity = 0,
  hidden = true,
  setHidden
}: CoverProps) {
  return (
    <UiCover hidden={hidden} onClose={() => setHidden(true)}>
      <UiTypography variant="h3" align="center" fontColor="white">
        Você acabou de realizar um procedimento.
      </UiTypography>
      <UiBox display="flex" justifyContent="center" m="40px">
        <img src={NewProcedure} />
      </UiBox>
      <UiTypography variant="h3" align="center" fontColor="white">
        Por ter feito todos os procedimentos corretos você ganhou:
      </UiTypography>
      <UiTypography
        variant="h3"
        color="secondary"
        align="center"
        fontWeight="bold"
        style={{ margin: '10px' }}
      >
        +{creditsQuantity} créditos
      </UiTypography>
      <UiTypography
        variant="h3"
        color="secondary"
        align="center"
        fontWeight="bold"
        style={{ margin: '10px' }}
      >
        +{xpQuantity} xp
      </UiTypography>
    </UiCover>
  );
}
