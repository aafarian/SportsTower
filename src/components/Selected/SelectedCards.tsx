import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';

const useStyles = createUseStyles({
  selectedCards: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
    boxShadow: 'inset 0 0 0 .1rem white',
    resize: 'horizontal',
    overflow: 'auto'
  },
});

export const SelectedCards = () => {
  const classes = useStyles();
  const selectedProjections = useSelector((state: RootState) => state.playerData.selectedProjections);

  return (
    <div className={classes.selectedCards} id="selectedCards">
      <div>
        { JSON.stringify(selectedProjections) }
      </div>
    </div>
  );
};
