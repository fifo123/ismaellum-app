import { useLazyQuery, useMutation } from '@apollo/client';
import { Box, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UiButton } from '../../components/atoms/Button';
import { UiPaper } from '../../components/atoms/Paper';
import { UiTextField } from '../../components/atoms/TextField';
import Haoc from '../../shared/assets/haoc.svg';
import Logo from '../../shared/assets/logo.svg';
import { UserModel } from '../../types/models/user.model';
import { GET_USER } from '../Home/query/getUser';
import { MAKE_LOGIN } from './query/login';

export function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [makeLogin, { data, error }] = useMutation(MAKE_LOGIN);

  const handleSubmit = () => {
    try {
      makeLogin({
        variables: {
          email,
          password
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [getLoggedUser, getUserQuery] =
    useLazyQuery<{ user: UserModel }>(GET_USER);

  useEffect(() => {
    if (error?.message === 'Error: User or password wrong') {
      toast.error('Email ou senha incorretos');
    }
    if (data?.login) {
      getLoggedUser();
    }
  }, [data, error]);

  useEffect(() => {
    if (getUserQuery.data?.user?.user_id) {
      localStorage.setItem('token', data?.login);
      localStorage.setItem('user', JSON.stringify(getUserQuery.data?.user));
      history.push('/home');
    }
  }, [getUserQuery.data]);

  return (
    <>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '41px'
        }}
      >
        <UiPaper>
          <Box
            height={'100%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              style={{
                maxWidth: '273px'
              }}
              alignItems="center"
              justifyContent="center"
              container
              spacing={1}
            >
              <Grid item xs sm={6} style={{ marginBottom: '20px' }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ width: '100px', height: '87px' }}
                >
                  <img src={Logo} />
                </Box>
              </Grid>
              <Grid item xs sm={6} style={{ marginBottom: '20px' }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ width: '139px', height: '74px' }}
                >
                  <img src={Haoc} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <UiTextField
                  fullWidth
                  variant="outlined"
                  label="E-mail"
                  onChange={(event) => {
                    setEmail(event.target.value as string);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <UiTextField
                  fullWidth
                  variant="outlined"
                  label="Senha"
                  onChange={(event) => {
                    setPassword(event.target.value as string);
                  }}
                  type="password"
                />
              </Grid>
              <Grid item xs sm={6}>
                <UiButton
                  style={{ height: '40px' }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Login
                </UiButton>
              </Grid>
              <Grid item xs sm={6}>
                <UiButton
                  style={{ height: '40px' }}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Informações
                </UiButton>
              </Grid>
            </Grid>
          </Box>
        </UiPaper>
      </Container>
    </>
  );
}
