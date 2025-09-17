import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import SignIn from './pages/SignIn.jsx'; // example sign-in page
import SignInPage from './auth/sign-in/index.jsx';

// Define routes
const router = createBrowserRouter([
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/',
    element: <App />,
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
