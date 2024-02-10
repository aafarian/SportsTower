import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link, useParams } from 'react-router-dom';

const useStyles = createUseStyles({
  card: {
    background: 'grey',
    margin: '1rem',
    padding: '1rem',
    maxWidth: 'fit-content',
    textAlign: 'center'
  }
});

const ResultsPage = () => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <div
      className={classes.card}
    >
      Sample results page, access key from url like this: { id }
      <Link to="/">
        <button>
          Back to main page
        </button>
      </Link>
    </div>
  );
};

export default ResultsPage;
