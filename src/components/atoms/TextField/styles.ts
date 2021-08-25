import styled from 'styled-components';
import * as M from '@material-ui/core';

export const TextField = styled(M.TextField)`
  & label.Mui-focused {
    color: var(--babyBlue);
  }
  & .MuiInput-underline:after {
    border-bottom-color: var(--babyBlue);
    color: black;
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: var(--babyBlue);
      color: black;
    }
  }
`;
