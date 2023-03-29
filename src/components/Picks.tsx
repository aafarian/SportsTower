import React from 'react';
import Layout from './Layout';
import { createUseStyles } from 'react-jss';
import CardsFeed from './Feed/CardsFeed';
import { SelectedCards } from './Selected';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'hidden',
    height: '100%'
  },
  selectedCards: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    boxShadow: 'inset 0 0 0 .1rem white',
    resize: 'horizontal',
    overflow: 'auto'
  },
});

export const Picks = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <SelectedCards />
        <CardsFeed />
      </div>
    </Layout>
  );
};
