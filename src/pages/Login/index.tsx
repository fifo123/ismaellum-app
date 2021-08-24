import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { UiButton } from '../../components/atoms/Button';
import { UiPaper } from '../../components/atoms/Paper';
import { UiTextField } from '../../components/atoms/TextField';

export function Login() {
  return (
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
  );
}
