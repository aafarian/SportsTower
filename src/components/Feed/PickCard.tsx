import React from 'react';

import type { PickCardProps } from '../index.d';

import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import projectionDataSelectors from '../selectors/projectionDataSelectors';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '1rem',
    padding: '1rem',
    maxWidth: 'fit-content',
    textAlign: 'center'
  }
});

const PickCard = ({ projectionId, onSelect }: PickCardProps) => {
  const projectionData = useSelector(projectionDataSelectors.selectProjectionDataByProjectionId(projectionId));
  const { playerName, category, value } = projectionData;
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      onClick={() => { onSelect({ projectionId }); }}
    >
      {playerName}
      <hr />
      {category} -
      {value}
    </div>
  );
};

export default PickCard;
