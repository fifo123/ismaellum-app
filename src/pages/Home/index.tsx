import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { ProductItem } from '../../components/atoms/ProductItem';
import { UiTypography } from '../../components/atoms/Typography';
import { LinearProgressWithLabel } from '../../components/molecules/LinearProgressWithLabel';
import { ListRooms } from '../../components/molecules/ListRooms';
import { Header } from '../../components/templates/Header';
import { NewNotificationCover } from '../../components/templates/NewNotificationCover';
import Store from '../../shared/assets/store.svg';
import { GET_USER } from './query/getUser';
import { Layout } from './styles';

const socket = io('http://localhost:3000');

export function Home() {
  console.log('home');

  const history = useHistory();
  const [name, setName] = useState('-');
  const [credits, setCredits] = useState(0);
  const [level, setLevel] = useState(0);
  const [levelXp, setLevelXp] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [currentXp, setCurrentXp] = useState(0);
  const [userId, setUserId] = useState(0);
  const [coverHidden, setCoverHidden] = useState(true);
  const [moreXp, setMoreXp] = useState(0);
  const [moreCredits, setMoreCredits] = useState(0);
  const { data, error, refetch } = useQuery(GET_USER);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (error?.message) {
      history.push('/');
    }
    if (data?.user) {
      setName(data?.user.name);
      setCredits(data?.user.stats.credits);
      setLevel(data?.user.stats.level);
      setCurrentXp(data?.user.stats.currentXp);
      setLevelXp(data?.user.stats.levelXp);
      setTotalXp(data?.user.stats.totalXp);
      setUserId(data?.user.user_id);
    }
  }, [data, error]);

  useEffect(() => {
    if (userId) {
      socket.on(userId.toString(), (data) => {
        setMoreXp(data.totalXp);
        setMoreCredits(data.totalCredits);
        setCoverHidden(false);
        refetch();
      });
    }
  }, [socket, userId]);

  return (
    <>
      <NewNotificationCover
        hidden={coverHidden}
        setHidden={setCoverHidden}
        xpQuantity={moreXp}
        creditsQuantity={moreCredits}
      />
      <Header />
      <Box mb={4} />
      <Layout display="flex">
        <Box display="flex" width="100%" justifyContent="center">
          <UiTypography variant="h5" fontColor="darkPrimary">
            Bem-vindo, {name}!
          </UiTypography>
        </Box>
        <Box mb={2} />
        <div style={{ width: '100%' }}>
          <LinearProgressWithLabel
            value={(currentXp * 100) / 100}
            levelXp={levelXp}
            totalXp={totalXp}
          />
        </div>
        <Box mb={3} />
        <UiTypography variant="h5" fontColor="darkPrimary">
          Você está level: {level}
        </UiTypography>
        <Box mb={1} />
        <UiTypography variant="h5" fontColor="secondary">
          Você possui: {credits} créditos.
        </UiTypography>
        <Box mb={1} />
        <ProductItem
          name={'Ir para a loja'}
          image={Store}
          onClickCard={() => history.push('/store')}
          fullWidth
        />
        <Box mb={2} />
        <ListRooms
          category="Favoritos"
          roomCards={
            data?.user?.favoriteRooms?.map((favoriteRoom: any) => ({
              image: `http://localhost:3000/get-image/?imagem=${favoriteRoom?.room?.picture}`,
              name: `Sala ${favoriteRoom?.room?.number}`,
              subtitle: favoriteRoom?.room?.description,
              onClickCard: () => {
                history.push(`/room/${favoriteRoom?.room?.room_id}`);
              }
            })) || []
          }
        />
        <Box mb={2} />
        <ListRooms
          category="Histórico"
          roomCards={
            data?.user?.lastRooms?.map((lastRoom: any) => ({
              image: `http://localhost:3000/get-image/?imagem=${lastRoom.picture}`,
              name: `Sala ${lastRoom.number}`,
              subtitle: lastRoom.description,
              onClickCard: () => {
                history.push(`/room/${lastRoom?.room_id}`);
              }
            })) || []
          }
        />
        <Box mb={2} />
      </Layout>
    </>
  );
}
