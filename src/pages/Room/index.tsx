import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, Tabs } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UnFavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from '../../components/templates/Header';
import RoomImage from '../../shared/assets/sala.jpg';
import { MAKE_FAVORITE } from './mutation/makeFavorite';
import { GET_ROOM } from './query/getRoom';
import * as S from './styles';

export function Room() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [makeFavorite] = useMutation(MAKE_FAVORITE);
  const [page, setPage] = useState<number>(0);

  const [getRoom, { data, refetch }] = useLazyQuery(GET_ROOM, {
    variables: {
      room_id: +id
    }
  });

  useEffect(() => {
    if (id) {
      getRoom({
        variables: {
          room_id: +id
        }
      });
    }
  }, [id]);

  const [content, setContent] = useState<string>('procedures');

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    console.log(data);

    if (data?.room?.isFavorite === true || data?.room?.isFavorite === false) {
      setIsFavorite(data?.room?.isFavorite);
    }
  }, [data]);

  return (
    <>
      <Header
        name={`Sala ${data?.room?.number || ''}`}
        onGoBack={() => history.push('/home')}
      />
      <Box mb={3} />
      <S.HeaderContent>
        <S.RoomImage image={RoomImage} />
        <S.RoomContent>
          <label>Sala {data?.room?.number}</label>
          {data?.room?.description}
        </S.RoomContent>
      </S.HeaderContent>
      <S.FavoriteLine>
        <S.FavoriteButton
          onClick={async () => {
            await makeFavorite({
              variables: {
                room_id: +id
              }
            });
            if (refetch)
              refetch({
                room_id: +id
              });
          }}
        >
          Favoritar
          {isFavorite ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <UnFavoriteIcon fontSize="small" />
          )}
        </S.FavoriteButton>
      </S.FavoriteLine>
      <Box mb={3} />
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        value={content}
      >
        <S.StyledTab
          label="Procedimentos"
          value="procedures"
          style={{ borderRadius: '10px 0px 0px 0px' }}
          onClick={() => setContent('procedures')}
        />
        <S.StyledTab
          label="Histórico"
          value="history"
          style={{ borderRadius: '0px 10px 0px 0px' }}
          onClick={() => setContent('history')}
        />
      </Tabs>
      <S.Content>
        {content === 'procedures' ? (
          <>
            {data?.room?.roomProcedures?.map((procedure: any) => (
              <S.ProcedureCard key={procedure?.room_procedure_id}>
                <S.ProcedureCardImage
                  image={`http://localhost:3000/get-image/?imagem=${procedure?.procedure?.picture}`}
                />
                <S.ProcedureCardContent>
                  <strong>{procedure?.procedure?.name}</strong>
                  {procedure?.procedure?.description}
                </S.ProcedureCardContent>
              </S.ProcedureCard>
            ))}
          </>
        ) : (
          <>
            {data?.room?.history
              ?.slice(page * 5, page * 5 + 5)
              ?.map((roomHistory: any) => (
                <S.HistoryCard
                  disabled={roomHistory?.totalCredits === 0}
                  key={roomHistory?.createdAt}
                >
                  {new Date(roomHistory?.createdAt).toLocaleDateString(
                    'pt-br',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      weekday: 'long'
                    }
                  )}
                  <strong>+{roomHistory?.procedure_history_id} pts</strong>
                </S.HistoryCard>
              ))}
            <Pagination
              count={Math.ceil(Number(data?.room?.history?.length / 5))}
              onChange={(_, value) => {
                setPage(value - 1);
              }}
              style={{ marginTop: '20px' }}
            />
          </>
        )}
      </S.Content>
    </>
  );
}
