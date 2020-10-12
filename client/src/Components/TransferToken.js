// TransferToken Component contains the form to make transfer. 
// It takes the address, amount to transfer and gas limit

import React from 'react';
import { useStore } from '../contextAPI/GlobalState';
import { closeTransfer } from '../store/actions';
import { TransferAsync } from '../store/asyncActions';
import InputField from './InputField';


function TransferToken() {

    const [state, dispatch] = useStore();

    const handleBackClick = () => {
        dispatch(closeTransfer());
    }

    const handleTransferClick = () => {
        dispatch(TransferAsync(state, dispatch));
    }

    return (
        <div className="panel-block is-paddingless is-12">
            <div className="column is-12" id="token-lists">

                <InputField
                    name="receiver"
                    placeholder="Receiver Address"
                />


                <InputField
                    name="amount"
                    placeholder="Amount To Transfer"
                    addon={state.transferDetails.symbol.toUpperCase()}
                />

                <InputField
                    default={state.defaultGasPrice}
                    name="gasPrice"
                    placeholder="Gas Price In Gwei"
                    addon="Gas Price(gwei)"
                />

                <InputField
                    default={state.defaultGasLimit}
                    name="gasLimit"
                    placeholder="Gas Limit"
                    addon="Gas Limit"
                />

                <div className="field is-grouped is-pulled-right">
                    <p className="control">
                        <a className="button is-light"
                            disabled={state.inProgress}
                            onClick={() => handleBackClick()}
                        >
                            Back
                        </a>
                    </p>
                    <p className="control">
                        <a className={state.inProgress ? "button is-danger is-loading" : "button is-danger"}
                            disabled={state.inProgress}
                            onClick={() => handleTransferClick()}
                        >
                            Transfer
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransferToken;