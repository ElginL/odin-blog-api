import React from 'react';
import ReactDOM from 'react-dom/client';
import UnauthRoute from './routes/UnauthRoute';
import AuthRoute from './routes/AuthRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

const token = sessionStorage.getItem('token');

root.render(
    <React.StrictMode>
        {
            token 
                ? <AuthRoute />
                : <UnauthRoute />
        }
    </React.StrictMode>
);