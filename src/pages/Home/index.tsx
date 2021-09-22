import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import LinearProgress, {
  LinearProgressProps
} from '@material-ui/core/LinearProgress';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { UiCover } from '../../components/atoms/Cover';
import { Typography } from '../../components/atoms/Cover/styles';
import { GET_USER } from './query/getUser';
import { Layout } from './styles';

const socket = io('http://localhost:3000');

export function Home() {
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
    console.log(userId);

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
      <UiCover
        hidden={coverHidden}
        setHidden={setCoverHidden}
        xpQuantity={moreXp}
        creditsQuantity={moreCredits}
      ></UiCover>
      <Layout display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h3" align="center" fontColor="#024959">
          Olá, {name}.
        </Typography>
        <Typography variant="h3" align="center" fontColor="#024959">
          Você está level: {level}
        </Typography>
        <Typography variant="h3" align="center" fontColor="#024959">
          Você possui: {credits} créditos
        </Typography>
        <div style={{ width: '70%', marginTop: '20PX' }}>
          {/* TotalXp: {totalXp}
          levelXp: {levelXp}
          percent: {(totalXp * 100) / levelXp} % */}
          <LinearProgressWithLabel
            value={(currentXp * 100) / 100}
            levelXp={levelXp}
            totalXp={totalXp}
          />
        </div>
      </Layout>
    </>
  );
}

function LinearProgressWithLabel(
  props: LinearProgressProps & {
    value: number;
    levelXp: number;
    totalXp: number;
  }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={35} style={{ marginRight: '15px' }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.totalXp
        )}XP`}</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.levelXp
        )}XP`}</Typography>
      </Box>
    </Box>
  );
}
