import styled from 'styled-components';
import theme from '../../shared/themes/theme';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  text-align: center;
  strong {
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${() => theme.colors.darkPrimary};
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 112px;
  border: 2px solid ${() => theme.colors.darkPrimary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: ${() => theme.colors.darkPrimary};
  font-size: ${() => theme.font.sizes.small};
  text-align: center;
  div {
    width: 100%;
    margin: 0px 0px 0px 0px;
  }
  margin-bottom: 10px;
`;
