import { Box, Tab, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import theme from '../../shared/themes/theme';

export const HeaderContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
`;

export const RoomImage = styled.div<{
  image: string;
}>`
  width: 170px;
  height: 170px;
  border-radius: 10px;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center center;
`;

export const RoomContent = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  font-size: ${() => theme.font.sizes.normal};
  justify-content: center;
  label {
    font-size: ${() => theme.font.sizes.large};
  }
`;

export const FavoriteLine = styled.div`
  padding-right: 16px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const FavoriteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 128px;
  background-color: ${() => theme.colors.red};
  font-size: ${() => theme.font.sizes.small};
  color: ${() => theme.colors.white};
  padding: 5px 20px 5px 20px;
  border-radius: 50px;
`;

export const StyledTab = withStyles({
  root: {
    background: '#04BFBF'
  },
  selected: {
    background: '#037F8C',
    color: 'white !important'
  }
})(Tab);

export const ProcedureCard = styled.div`
  height: 136px;
  width: 100%;
  display: flex;
  background-color: #037f8c;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  gap: 10px;
`;

export const ProcedureCardImage = styled.div<{
  image: string;
}>`
  width: 220px;
  height: 100%;
  border-radius: 10px 0px 0px 10px;

  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center center;
`;

export const ProcedureCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 16px;
  gap: 10px;
  height: 100%;
  align-items: center;
  text-align: center;
  color: white;
  strong {
    color: #04bfbf;
  }
`;

export const HistoryCard = styled.div<{
  disabled: boolean;
}>`
  background: ${({ disabled }) => (disabled ? '#4B5A5E' : '#024959')};
  display: flex;
  width: 100%;
  padding: 20px 7px 20px 7px;
  border-radius: 10px;
  color: white;
  justify-content: space-between;
  text-align: center;
  text-transform: capitalize;
`;
