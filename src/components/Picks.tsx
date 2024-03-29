import React from 'react';
import Layout from './Layout';
import { createUseStyles } from 'react-jss';
import CardsFeed from './Feed/CardsFeed';
import Cart from './Selected/Cart';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'hidden',
    height: '100%',
  },
});

export const Picks = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <Cart />
        <CardsFeed />
      </div>
    </Layout>
  );
};
