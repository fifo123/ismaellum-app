import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import LinearProgress, {
  LinearProgressProps
} from '@material-ui/core/LinearProgress';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '../../components/atoms/Cover/styles';
import { GET_USER } from './query/getUser';
import { Layout } from './styles';

export function Home() {
  const history = useHistory();

  const [name, setName] = useState('-');
  const [credits, setCredits] = useState(0);
  const [level, setLevel] = useState(0);
  const [levelXp, setLevelXp] = useState(0);
  const [totalXp, setTotalXp] = useState(0);

  const { data, error } = useQuery(GET_USER);

  useEffect(() => {
    if (error?.message) {
      history.push('/');
    }
    if (data?.user) {
      setName(data?.user.name);
      setCredits(data?.user.stats.credits);
      setLevel(data?.user.stats.level);
      setLevelXp(data?.user.stats.levelXp);
      setTotalXp(data?.user.stats.totalXp);
    }
  }, [data, error]);

  return (
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
        <LinearProgressWithLabel value={(totalXp * 100) / levelXp} />
      </div>
    </Layout>
  );
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}XP`}</Typography>
      </Box>
    </Box>
  );
}
