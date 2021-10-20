import styled from 'styled-components';
import theme from '../../../shared/themes/theme';

export const RoomContainer = styled.div<{
  image: string;
}>`
  display: flex;
  flex-direction: column;
  width: 131px;
  height: 165px;
  padding: 12px;
  border-radius: 10px;
  justify-content: flex-end;
  align-items: center;
  color: ${() => theme.colors.darkPrimary};
  font-size: ${() => theme.font.sizes.small};

  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center center;
`;

export const RoomTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;

  color: ${() => theme.colors.white};
  font-size: ${() => theme.font.sizes.normal};
  font-weight: ${() => theme.font.weight.normal};
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 64px;
  margin: 0 !important;
  label:first-child {
    font-size: ${() => theme.font.sizes.normal};
  }
  label {
    font-size: ${() => theme.font.sizes.small};
  }
`;
