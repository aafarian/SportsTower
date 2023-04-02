import React from 'react';

import { createUseStyles } from 'react-jss';

import { type CardData } from '../index.d';

import { Choice } from './Choice';

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

const CartCard = ({ playerName, projection }: CartCardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
    // onClick={() => { onSelect({ name, proj }); }}
    >
      <div>
        {playerName}<br />
        {projection}
      </div>
      <Choice />
    </div>
  );
};

export default CartCard;
