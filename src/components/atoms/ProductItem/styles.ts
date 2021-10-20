import styled from 'styled-components';
import theme from '../../../shared/themes/theme';

export const ProductContainer = styled.div<{
  fullWidth?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '112px')};
  height: 112px;
  padding: 12px;
  border: 2px solid ${() => theme.colors.darkPrimary};
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  color: ${() => theme.colors.darkPrimary};
  font-size: ${() => theme.font.sizes.small};
  text-align: center;
  div {
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
`;
