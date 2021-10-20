import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Layout = styled(Box)`
  display: block;
  width: 100%;
  height: 100%;
  flex-flow: column;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ListItems = styled(Box)`
  display: flexbox;
  width: 100%;
  height: auto;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
`;
