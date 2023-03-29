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

interface PlayerData {
  projectionId: string
  name: string
  proj: string
}

interface PickCardProps {
  projectionId: string
  name: string
  proj: string
  onSelect: (props: PlayerData) => void
}

const PickCard = ({ projectionId, name, proj, onSelect }: PickCardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      onClick={() => { onSelect({ projectionId, name, proj }); }}
    >
      {name}
      <hr />
      {proj}
    </div>
  );
};

export default PickCard;
