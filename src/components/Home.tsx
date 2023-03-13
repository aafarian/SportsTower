import React from 'react';
import {
  Link
} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Welcome to the home page. Click here to go to&nbsp;
      <Link to="/About">about!</Link>
    </div>
  );
}
