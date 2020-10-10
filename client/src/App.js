import React from 'react';
import { GlobalProvider } from './contextAPI/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
            Hello World
        </GlobalProvider>
    );
}

export default App;
