// This is also a notification component that 
// displays a warning if the user metamask account is locked.

import React from 'react';

function UnlockMetaMask(props) {
    return (
        <div className="column is-4 is-offset-4">
            <div className="notification is-danger">
                <button className="delete"></button>
                {props.message}
            </div>
        </div>
    );
}

export default UnlockMetaMask;
