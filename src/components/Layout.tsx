import React from 'react';
import { useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import JerseyM54 from '../fonts/JerseyM54.ttf';

const useStyles = createUseStyles({
  '@font-face': {
    fontFamily: 'SportsTowerDefault',
    src: `url(${JerseyM54 as string})`,
    fontWeight: 100,
  },
  background: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    fontSize: '24px',
    color: 'white',
    background: 'black',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Tahoma',
    letterSpacing: '-0.3px',
  },
  header: {
    boxShadow: 'inset 0 0 0 .1rem white',
    padding: '1rem'
  },
  content: {
    width: '100%',
    flex: 1,
    boxShadow: 'inset 0 0 0 .1rem white',
    overflow: 'auto'
  },
  logo: {
    fontFamily: 'SportsTowerDefault',
    float: 'left',
    padding: '10px'
  },
  user: {
    float: 'right',
    padding: '10px'
  }
});

const Layout = (props: React.HTMLProps<HTMLElement>) => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {/* TODO: Header component */}
      <div className={classes.header}>
        <span className={classes.logo}><h1>SPORTSTOWER</h1></span>
        <span className={classes.user}><h4>Logged in as {location.state?.username ?? 'Tester'}</h4></span>
      </div>
      {/* END Header component */}
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
