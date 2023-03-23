import React from 'react';
import {
  Link
} from "react-router-dom";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  description: {
    fontSize: '24px',
  },
});

export const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.description}>
      Welcome to the home page. Click here to go to&nbsp;
      <Link to="about">abouthummus!</Link>
    </div>
  );
}
