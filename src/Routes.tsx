import React from 'react';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ResultsPage from './components/Results/ResultsPage';

export const Routes = [
  {
    path: "/*",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: "/results/:id",
    element: (
      <ResultsPage />
    ),
  },
];