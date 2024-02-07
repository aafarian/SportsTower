/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import projectionDataSelectors from '../selectors/projectionDataSelectors';
import CartCard from './CartCard';

const CartCardList = () => {
  const allSelectedProjections = useSelector(projectionDataSelectors.selectAllPickedCards);
  console.log('1111 all selected: ', allSelectedProjections);

  return (
    <div>
      {allSelectedProjections.map((projectionId: string, ind: number) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return <CartCard key={`${projectionId}${ind}`} projectionId={projectionId} />;
      })}
      {/* { JSON.stringify(selectedProjections) } */}
    </div>
  );
};

export default CartCardList;
