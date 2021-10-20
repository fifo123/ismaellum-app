import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { UiTypography } from '../../atoms/Typography';

type HeaderProps = {
  name?: string;
  onGoBack?: () => void;
};

export function Header({ name = 'Home', onGoBack }: HeaderProps) {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid container alignItems="center" item>
            <IconButton
              edge="start"
              color="default"
              aria-label="menu"
              onClick={() => {
                if (onGoBack) onGoBack();
                else history.goBack();
              }}
            >
              <ArrowLeft />
            </IconButton>
            <UiTypography
              variant="h3"
              fontWeight="light"
              title="Home"
              fontColor="white"
            >
              {name}
            </UiTypography>
          </Grid>
        </Grid>
        <Avatar alt="Profile Icon" src="https://source.unsplash.com/random" />
      </Toolbar>
    </AppBar>
  );
}
