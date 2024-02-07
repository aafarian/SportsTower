import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createUseStyles } from 'react-jss';

import { type CardData } from '../index.d';

import { playerRemoved } from '../../redux/slices/playerDataSlice';

import Choice from './Choice';
import projectionDataSelectors from '../selectors/projectionDataSelectors';

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

interface CartCardProps extends CardData {
  onClose?: (id: string) => void
}

const CartCard = ({ projectionId, onClose }: CartCardProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectionData = useSelector(projectionDataSelectors.selectProjectionDataByProjectionId(projectionId));
  const { playerName, category, value } = projectionData;

  return (
    <div
      className={classes.card}
    >
      <button className={classes.close} onClick={() => { dispatch(playerRemoved({ projectionId })); }}>x</button>
      <div>
        {playerName}<br />
        {category} - {value}
      </div>
      <Choice />
    </div>
  );
};

export default CartCard;
