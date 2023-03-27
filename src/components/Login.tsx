import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  background: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    fontSize: '24px',
    color: 'white',
    background: 'black',
    width: '100vw',
    height: '100vh'
  },
  login: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-100%)',
    width: 'fit-content',
    textAlign: 'center'
  }
});

export const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.login}>
        <h2>SPORTSTOWER</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const username = (
              document.getElementById('username') as HTMLInputElement
            ).value;
            navigate('picks', {
              state: {
                username
              }
            });
          }}
        >
          <label htmlFor="username">Enter a Username:</label>
          <br />
          <input type="text" id="username" name="username" required />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
