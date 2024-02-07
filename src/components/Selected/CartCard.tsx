import React from 'react';

import { useDispatch } from 'react-redux';

import { createUseStyles } from 'react-jss';

import { type CardData } from '../index.d';

import { playerRemoved } from '../../redux/slices/playerDataSlice';

import Choice from './Choice';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '.5rem',
    marginBottom: '0',
    padding: '1rem',
    width: 'flex',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  close: {
    aspectRatio: 1,
    height: '2rem',
    margin: '.5rem'
  }
});

// type ou = boolean | null;

interface CartCardProps extends CardData {
  // name: string
  // proj: string
  // onSelect: (props: CardData) => void
  // callback?: React.MouseEventHandler<HTMLDivElement>
  onClose?: (id: string) => void
}

const CartCard = ({ playerName, projection, projectionId, onClose }: CartCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div
      className={classes.card}
    // onClick={() => { onSelect({ name, proj }); }}
    >
      <button className={classes.close} onClick={() => { dispatch(playerRemoved(projectionId)); }}>x</button>
      <div>
        {playerName}<br />
        {projection}
      </div>
      <Choice />
    </div>
  );
};

export default CartCard;
