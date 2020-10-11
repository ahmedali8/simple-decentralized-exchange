import React, { createContext, useContext, useEffect, useReducer } from 'react';
import AppReducer from '../store/AppReduer';
import { loadBlockchainData } from '../store/asyncActions';

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
    tzAddress: null,
    tx: null,
    tokens: [],
    transferDetails: {},
    fields: {
        receiver: null,
        amount: null,
        gasPrice: null,
        gasLimit: null,
    },
    defaultGasPrice: null,
    defaultGasLimit: 200000
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