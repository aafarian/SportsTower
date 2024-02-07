import React from 'react';

import { createUseStyles } from 'react-jss';
// import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { populate, playerAdded } from '../../redux/slices/playerDataSlice';
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
    flex: '3',
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
          // proj is a Projection, check components/index.d.ts
          return player.projections.map((proj, indexB) => {
            // const proj = proj;
            const [id, data] = proj;
            return (
              <PickCard
                playerName={player.playerName}
                projectionId={id}
                projection={data}
                key={`${indexA}${indexB}`}
                onSelect={({ projectionId, playerName, projection }) => {
                  const cardData = { projectionId, playerName, projection };
                  dispatch(playerAdded(cardData));
                  // console.log(cardData);
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
