// SortTokenBlock Component to sort list of only supported tokens in a wallet ASC/DESC

import React from 'react';

function sortTokenBlock(props) {
    return (
        <div className="panel-block">
            <p className="control has-text-grey is-size-7 has-text-right sortby">
                sort <i className="fas fa-sort has-text-grey-light"></i>
            </p>
        </div>
    )
}

export default sortTokenBlock;