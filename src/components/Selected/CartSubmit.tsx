import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  submitButton: {
    position: 'relative',
    margin: '0 auto',
    top: '1rem',
    background: 'white',
    height: 'fit-content',
    fontSize: 'inherit'
  }
});

function CartSubmit (props: React.HTMLProps<HTMLElement>) {
  const classes = useStyles();
  const allSelectedProjections: object = useSelector((state: RootState) => state.playerData.allSelectedProjections);
  return (<button className={classes.submitButton} onClick={() => {
    //
    if (Object.keys(allSelectedProjections).length === 0) {
      console.log('empty cart');
    } else {
      console.log('check if cards are complete');
    }
  }}>LOCK IN</button>);
}

export default CartSubmit;
