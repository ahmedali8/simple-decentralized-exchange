// Actions 

export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
};

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
};

export const setupAccount = (account) => {
    return {
        type: 'SETUP_ACCOUNT',
        payload: account
    };
};

export const setupNetwork = (networkName) => {
    return {
        type: 'SETUP_NETWORK',
        payload: networkName
    };
};

export const addTokens = (tokens) => {
    return {
        type: 'ADD_TOKENS',
        payload: tokens
    };
};

export const newTransfer = (index) => {
    return {
        type: 'NEW_TRANSFER',
        payload: index
    }
};