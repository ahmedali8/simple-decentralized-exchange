// This Container component holds several other components, 
// toggles some components display as state changes and passes 
// down their respectives state to them passed from app.js to it.

import React from 'react';
import { useStore } from '../contextAPI/GlobalState';
import AddressBar from './AddressBar';
import TokenBlock from './TokenBlock';
import TradeMarkBlock from './TradeMarkBlock';
import SortTokenBlock from './SortTokenBlock';
import TransferToken from './TransferToken';
import TransferHeader from './TransferHeader';
import SuccessTransaction from './SuccessTransaction';


function Container() {

    const [state, dispatch] = useStore();

    return (
        <section className="container">
            <div className="columns">
                <div className="is-half is-offset-one-quarter column">
                    <div className="panel">
                        {
                            state.tx ?
                                <SuccessTransaction tx={state.tx} /> :
                                ''
                        }

                        <AddressBar account={state.account} tx={state.tx} />
                        {
                            state.transferDetails.hasOwnProperty('name') ?
                                <div>
                                    <TransferHeader token={state.transferDetails} />
                                    <TransferToken />
                                </div> :
                                <div className={state.tx ? 'is-hidden' : ''}>
                                    <SortTokenBlock />
                                    <TokenBlock
                                        newTransfer={state.newTransfer}
                                        tokens={state.tokens}
                                    />
                                </div>
                        }
                        <TradeMarkBlock tx={state.tx} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Container;
