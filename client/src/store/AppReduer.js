export default (state, action) => {
    switch (action.type) {
        case 'SETUP_WEB3':
            return {
                ...state,
                web3: action.payload,
                isWeb3: true
            }

        case 'SETUP_CONTRACT':
            return {
                ...state,
                contract: action.payload
            }

        case 'SETUP_ACCOUNT':
            return {
                ...state,
                account: action.payload
            }

        case 'SETUP_NETWORK':
            return {
                ...state,
                network: action.payload
            }

        case 'SETUP_GAS_PRICE':
            return {
                ...state,
                defaultGasPrice: action.payload
            }

        case 'ADD_TOKENS':
            return {
                ...state,
                tokens: [...state.tokens, action.payload]
            }

        case 'NEW_TRANSFER':
            return {
                ...state,
                transferDetails: state.tokens[action.payload]
            }

        case 'CLOSE_TRANSFER':
            return {
                ...state,
                transferDetails: {},
                fields: {}
            }

        default:
            return state;
    }
}