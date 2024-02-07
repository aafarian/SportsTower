/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import CartCard from './CartCard';

const CartCardList = () => {
  const allSelectedProjections = useSelector((state: RootState) => state.playerData.allSelectedProjections);

  return (
    <div>
      {Object.keys(allSelectedProjections).map((projectionId: string, ind: number) => {
        const playerName = allSelectedProjections[projectionId].playerName;
        const playerProj = allSelectedProjections[projectionId].projection;
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return <CartCard key={`${playerName}${ind}`} projectionId={projectionId} playerName={playerName} projection={playerProj} />;
      })}
      {/* { JSON.stringify(selectedProjections) } */}
    </div>
  );
};

export default CartCardList;
