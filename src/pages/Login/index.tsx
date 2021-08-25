import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { UiButton } from '../../components/atoms/Button';
import { UiCover } from '../../components/atoms/Cover';
import { UiPaper } from '../../components/atoms/Paper';
import { UiTextField } from '../../components/atoms/TextField';
import Logo from '../../shared/assets/logo.svg';
import Haoc from '../../shared/assets/haoc.svg';

export function Login() {
  const [coverHidden, setCoverHidden] = useState(true);
  return (
    <>
      <UiCover hidden={coverHidden} setHidden={setCoverHidden}></UiCover>
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
                <UiTextField fullWidth variant="outlined" label="E-mail" />
              </Grid>
              <Grid item xs={12}>
                <UiTextField fullWidth variant="outlined" label="Senha" />
              </Grid>
              <Grid item xs sm={6}>
                <UiButton
                  style={{ height: '40px' }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => setCoverHidden(false)}
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
