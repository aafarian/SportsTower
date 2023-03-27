import React from 'react';

import { createUseStyles } from 'react-jss';
// import { useLocation } from 'react-router-dom'

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

interface PickCardProps {
  name: string
  proj: string
  onSelect: (props: PlayerData) => void
  callback?: React.MouseEventHandler<HTMLDivElement>
}

const PickCard = ({ name, proj, onSelect, callback }: PickCardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      onClick={() => { onSelect({ name, proj }); }}
    >
      {name}
      <hr />
      {proj}
    </div>
  );
};

export default PickCard;
