// TransferToken Component contains the form to make transfer. 
// It takes the address, amount to transfer and gas limit

import React from 'react';
import InputField from './InputField';

function TransferToken(props) {
    return (
        <div className="panel-block is-paddingless is-12">
            <div className="column is-12" id="token-lists">

                <InputField onInputChangeUpdateField={props.onInputChangeUpdateField}
                    fields={props.fields} name="receiver" placeholder="Receiver Address" />


                <InputField onInputChangeUpdateField={props.onInputChangeUpdateField}
                    fields={props.fields} name="amount" placeholder="Amount To Transfer" addon={props.transferDetail.symbol.toUpperCase()} />

                <InputField onInputChangeUpdateField={props.onInputChangeUpdateField}
                    default={props.defaultGasPrice}
                    fields={props.fields} name="gasPrice" placeholder="Gas Price In Gwei" addon="Gas Price(gwei)" />

                <InputField onInputChangeUpdateField={props.onInputChangeUpdateField}
                    default={props.defaultGasLimit}
                    fields={props.fields} name="gasLimit" placeholder="Gas Limit" addon="Gas Limit" />

                <div className="field is-grouped is-pulled-right">
                    <p className="control">
                        <a className="button is-light" disabled={props.inProgress}
                            onClick={() => props.closeTransfer()}>
                            Back
                        </a>
                    </p>
                    <p className="control">
                        <a className={props.inProgress ? "button is-danger is-loading" : "button is-danger"}
                            disabled={props.inProgress} onClick={() => props.Transfer()}>
                            Transfer
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TransferToken;