import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './contextAPI/GlobalState';
import App from './App';
import 'bulma-start/css/main.css';
import './index.css';

ReactDOM.render(
    <GlobalProvider>
        <React.StrictMode>

            <App />
        </React.StrictMode>
    </GlobalProvider>,
    document.getElementById('root')
);

