import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorPage from './components/ErrorPage';
import Charts from './routes/Charts';
import store from './redux/store';

import WebSocketProvider from './components/WebSocket';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Market from './routes/Market';
import Positions from './routes/Positions';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Market />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/charts',
        element: <Charts />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/positions',
        element: <Positions />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Provider store={store}>
                <WebSocketProvider>
                    <ThemeProvider theme={darkTheme}>
                        <RouterProvider router={router} />
                    </ThemeProvider>
                </WebSocketProvider>
            </Provider>
        </LocalizationProvider>
    </React.StrictMode>,
);
