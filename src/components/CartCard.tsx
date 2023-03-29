import React from 'react';

import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlice';
import { type RootState } from '../redux/store';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '1rem',
    padding: '1rem',
    maxWidth: 'fit-content',
    textAlign: 'center'
  }
});

interface PlayerData {
  name: string
  proj: string
}

interface CartCardProps {
  name: string
  proj: string
  onSelect: (props: PlayerData) => void
  callback?: React.MouseEventHandler<HTMLDivElement>
}

const CartCard = ({ name, proj, onSelect, callback }: CartCardProps) => {
  const classes = useStyles();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      className={classes.card}
      onClick={() => { onSelect({ name, proj }); }}
    >
      <div onClick={() => dispatch(increment())}>
        {name}
      </div>
      {count}
      <hr />
      <div onClick={() => dispatch(decrement())}>
        {proj}
      </div>
    </div>
  );
};

export default CartCard;
