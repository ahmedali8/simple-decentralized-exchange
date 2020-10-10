import React, { createContext, useContext, useEffect, useReducer } from 'react';
import AppReducer from '../store/AppReduer';
import { loadBlockchainData } from '../store/asyncActions';
import Web3 from 'web3';

// initial state 
const initialState = {
    appName: 'TokenZendR',
    isWeb3: false,
    isWeb3Locked: false,
    web3: null,
    network: 'Checking...',
    account: null,
    contract: null,
    inProgress: false,
    tokens: [],
    transferDetails: {}
};

// create Global State 
export const GlobalContext = createContext(initialState);

// Global Provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    console.log('state >>>', state);

    useEffect(() => {
        loadBlockchainData(dispatch);
    }, []);

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    );
};

// custom hook to access global state and dispatch
export const useStore = () => useContext(GlobalContext);