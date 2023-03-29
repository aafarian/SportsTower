import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '1rem',
    padding: '1rem',
    maxWidth: 'fit-content',
    textAlign: 'center'
  }
});

interface CartCardProps {
  name: string
  proj: string
  // onSelect: (props: PlayerData) => void
  // callback?: React.MouseEventHandler<HTMLDivElement>
}

const CartCard = ({ name, proj }: CartCardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      // onClick={() => { onSelect({ name, proj }); }}
    >
      {name}
      <hr />
      {proj}
    </div>
  );
};

export default CartCard;
