/* eslint-disable array-callback-return */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import CartCard from './CartCard';

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
  const allSelectedProjections = useSelector((state: RootState) => state.playerData.allSelectedProjections);

  return (
    <div className={classes.cartCardList} id="cartCardList">
      <div>
        { allSelectedProjections.map((player: any, ind: string) => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          return <CartCard key={`${player.name}${ind}`} name={player.name} proj={player.proj} />;
        }) }
        {/* { JSON.stringify(selectedProjections) } */}
      </div>
    </div>
  );
};

export default CartCardList;
