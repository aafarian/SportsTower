import React, { useEffect } from 'react';

import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { populate, playerAdded } from '../../redux/slices/playerDataSlice';
import PickCard from './PickCard';
import { projectionsFixture } from './../Fixtures/projectionsFixture';
import projectionDataSelectors from '../selectors/projectionDataSelectors';
import categorySelectors from '../selectors/categorySelectors';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '1rem',
    padding: '1rem',
    maxWidth: 'fit-content',
    textAlign: 'center'
  },
  picks: {
    padding: '1rem',
    display: 'grid',
    flex: '3',
    gridTemplateColumns: 'repeat(3,1fr)',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'auto'
  }
});

const CardsFeed = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(projectionDataSelectors.selectAllProjectionData);
  const categories = useSelector(categorySelectors.selectAllCategories);

  useEffect(() => {
    dispatch(populate(projectionsFixture));
  }, []);

  return (
    <div className={classes.picks}>
      {
        data.map((projectionId, indexA) => {
          return (
            <PickCard
              projectionId={projectionId}
              key={`${indexA}player`}
              onSelect={({ projectionId }) => {
                dispatch(playerAdded({ projectionId }));
              }}
            />
          );
        })
      }
    </div>
  );
};

export default CardsFeed;
