import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/Signup';
import Personal from './Components/Personal';
import Company from './Components/Company';
import Error from './Components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  { path: '/sign-up', element: <Signup /> },
  {
    path: '/sign-up',
    element: <Signup />,
    children: [
      { path: '/sign-up/personal', element: <Personal /> },
      { path: '/sign-up/company', element: <Company /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
