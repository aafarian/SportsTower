import React from 'react';

import { createUseStyles } from 'react-jss';
// import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { populate, playerClicked } from '../../redux/slices/playerDataSlice';
import { type RootState } from '../../redux/store';
import PickCard from './PickCard';
import { projectionsFixture } from './../Fixtures/projectionsFixture';

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
    flex: '1',
    gridTemplateColumns: 'repeat(3,1fr)',
    // gap: '1rem',
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'auto'
  }
});

const CardsFeed = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(populate(projectionsFixture));
  const data = useSelector((state: RootState) => state.playerData.projections);

  return (
    <div className={classes.picks}>
      {
        data.map((player, indexA) => {
          return player.proj.map((projection, indexB) => {
            return (
              <PickCard
                projectionId={player.projectionId}
                name={player.name}
                proj={projection}
                key={`${indexA}${indexB}`}
                onSelect={({ projectionId, name, proj }) => {
                  const cardData = { projectionId, name, proj };
                  const stuff: any = { projectionId, name, proj };
                  dispatch(playerClicked(stuff));
                  console.log(cardData);
                }}
              />
            );
          });
        })
      }
    </div>
  );
};

export default CardsFeed;
