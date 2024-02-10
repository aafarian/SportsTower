import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes';

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RouterProvider
    router={router}
    // TODO1: Loading element goes here, also figure out how to find loading state
    // TODO1: Not found page?
    fallbackElement={<div>TODO: Loading element</div>}
  />,
);
