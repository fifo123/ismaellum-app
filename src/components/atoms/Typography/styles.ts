import styled from 'styled-components';
import { Typography as Typo } from '@material-ui/core';
import theme from '../../../shared/themes/theme';

export type TypographyProps = {
  fontColor?: keyof typeof theme.colors;
  fontWeight?: keyof typeof theme.font.weight;
  fontSize?: keyof typeof theme.font.sizes;
};

export const Typography = styled(Typo)<TypographyProps>`
  color: ${(props) => theme.colors[props.fontColor || 'primary']};
  font-weight: ${(props) => theme.font.weight[props.fontWeight || 'normal']};
  font-size: ${(props) => theme.font.sizes[props.fontSize || 'normal']};
`;
