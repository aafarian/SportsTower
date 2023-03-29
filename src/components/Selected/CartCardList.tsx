import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';

const useStyles = createUseStyles({
  cartCardList: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    boxShadow: 'inset 0 0 0 .1rem white',
    resize: 'horizontal',
    overflow: 'auto'
  },
});

const CartCardList = () => {
  const classes = useStyles();
  const selectedProjections = useSelector((state: RootState) => state.playerData.selectedProjections);

  return (
    <div className={classes.cartCardList} id="cartCardList">
      <div>
        { JSON.stringify(selectedProjections) }
      </div>
    </div>
  );
};

export default CartCardList;
