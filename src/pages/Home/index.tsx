import { useQuery } from '@apollo/client';
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
      <Typography variant="h3" align="center" fontColor="#024959">
        Próximo nível é necessário {levelXp} xp
      </Typography>
    </Layout>
  );
}
