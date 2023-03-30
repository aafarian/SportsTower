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
        { Object.keys(allSelectedProjections).map((projectionId: string, ind: number) => {
          const playerName = allSelectedProjections[projectionId].playerName;
          const playerProj = allSelectedProjections[projectionId].projection;
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          return <CartCard key={`${playerName}${ind}`} projectionId={projectionId} playerName={playerName} projection={playerProj} />;
        }) }
        {/* { JSON.stringify(selectedProjections) } */}
      </div>
    </div>
  );
};

export default CartCardList;
