import React from 'react';

import type { PickCardProps } from '../index.d';

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

const PickCard = ({ projID, playerName, projection, onSelect }: PickCardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      onClick={() => { onSelect({ projID, playerName, projection }); }}
    >
      {playerName}
      <hr />
      {projection}
    </div>
  );
};

export default PickCard;
