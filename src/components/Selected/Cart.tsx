import React from 'react';

import CartCardList from './CartCardList';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cart: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    width: '33%',
    boxShadow: 'inset 0 0 0 .1rem white',
    resize: 'horizontal',
    overflow: 'auto'
  },
  submitButton: {
    position: 'relative',
    margin: '0 auto',
    top: '1rem',
    background: 'white',
    height: 'fit-content',
    fontSize: 'inherit'
  }
});

function Cart (props: React.HTMLProps<HTMLElement>) {
  const classes = useStyles();
  return (<div className={classes.cart}>
    <CartCardList />
    <button className={classes.submitButton}>LOCK IN</button>
  </div>);
}

export default Cart;
