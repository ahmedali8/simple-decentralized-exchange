import React from 'react';
import { useStore } from './contextAPI/GlobalState';
import Nav from './Components/Nav';
import Description from './Components/Description';
import Container from './Components/Container';
import InstallMetaMask from './Components/InstallMetaMask';

import './App.css';

function App() {

    const [state] = useStore();
    console.log(state)

    const content = (
        <div>
            <Nav />
            <Description />
            <Container />
        </div>
    );

    return (
        <div>
            {
                state.web3 ?
                    content :
                    <InstallMetaMask />
            }
        </div>
    );
}

export default App;
