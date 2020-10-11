// TransferToken Component contains the form to make transfer. 
// It takes the address, amount to transfer and gas limit

import React from 'react';
import { useStore } from '../contextAPI/GlobalState';
import { closeTransfer } from '../store/actions';
import InputField from './InputField';


function TransferToken() {

    const [state, dispatch] = useStore();

    const handleClick = () => {
        dispatch(closeTransfer());
    }

    return (
        <div className="panel-block is-paddingless is-12">
            <div className="column is-12" id="token-lists">

                <InputField onInputChangeUpdateField={state.onInputChangeUpdateField}
                    fields={state.fields} name="receiver" placeholder="Receiver Address" />


                <InputField onInputChangeUpdateField={state.onInputChangeUpdateField}
                    fields={state.fields} name="amount" placeholder="Amount To Transfer" addon={state.transferDetail.symbol.toUpperCase()} />

                <InputField onInputChangeUpdateField={state.onInputChangeUpdateField}
                    default={state.defaultGasPrice}
                    fields={state.fields} name="gasPrice" placeholder="Gas Price In Gwei" addon="Gas Price(gwei)" />

                <InputField onInputChangeUpdateField={state.onInputChangeUpdateField}
                    default={state.defaultGasLimit}
                    fields={state.fields} name="gasLimit" placeholder="Gas Limit" addon="Gas Limit" />

                <div className="field is-grouped is-pulled-right">
                    <p className="control">
                        <a className="button is-light" disabled={state.inProgress}
                            onClick={() => handleClick()}>
                            Back
                        </a>
                    </p>
                    <p className="control">
                        <a className={state.inProgress ? "button is-danger is-loading" : "button is-danger"}
                            disabled={state.inProgress} onClick={() => state.Transfer()}>
                            Transfer
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransferToken;