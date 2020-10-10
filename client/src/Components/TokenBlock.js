// TokenBlock Component list the supported tokens available in a user wallet

import React from 'react';

function TokenBlock(props) {
    return (
        <div className="panel-block is-paddingless is-12" >
            <div className="column is-12" id="token-lists">
                {
                    props.tokens.map((token, index) => {
                        return (
                            <div key={index} className="columns token">
                                <div className="column is-2 has-text-centered">
                                    <img alt={token.symbol} src={'icons/' + token.icon} className="token-icon"></img>
                                </div>
                                <div className="column is-3 is-size-5 is-ellipsis">
                                    {token.symbol}
                                </div>
                                <div className="column is-5 is-size-6 is-ellipsis">
                                    {token.balance.toFixed(token.decimal)}
                                </div>
                                <div className="column is-2 has-text-centered">
                                    <button onClick={() => props.newTransfer(index)} className="button is-outlined is-small is-danger">
                                        Send
                                        </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TokenBlock;