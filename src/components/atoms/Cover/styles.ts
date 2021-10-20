import { Box, Typography as Typo } from '@material-ui/core';
import styled from 'styled-components';

export const Cover = styled(Box)<{
  hidden: boolean;
}>`
  position: fixed;
  display: ${({ hidden }) => (hidden ? 'none !important' : 'flex')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(2, 73, 89, 0.97);
  place-items: center;
  flex-flow: column;
`;

export const Typography = styled(Typo)<{ fontColor?: string }>`
  color: ${(props) => props.fontColor};
`;
