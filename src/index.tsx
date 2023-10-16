import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import 'app/styles/index.scss';
import App from './app/App';
import { StoreProvider } from 'app/providers/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>
);
