import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  over: {
    background: 'white',
    flex: 1,
  },
  under: {
    background: 'black',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '8px',
    flex: 1,
  }
});

const Choice = (props: React.HTMLProps<HTMLElement>) => {
  const classes = useStyles();

  let choice: boolean | null = null;

  return (<div
    className={classes.container}
    onClick={(event) => { console.log(choice); }}
  >
    <button className={classes.over} onClick={(event) => {
      if (choice === true) choice = null;
      else choice = true;
    }} />
    <button className={classes.under} onClick={(event) => {
      if (choice === false) choice = null;
      else choice = false;
    }} />
  </div>
  );
};

export default Choice;
