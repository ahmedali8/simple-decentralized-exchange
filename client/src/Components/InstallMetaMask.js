// This is a notification component that shows
// up when a user doesn’t have metamask installed.

import React from 'react';

function InstallMetaMask() {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <p className="image download-metamask">
                    <a href="https://metamask.io/" rel="noopener noreferrer" target="_blank">
                        <img src="https://metamask.io/images/mm-logo.svg" alt=""></img>
                    </a>
                </p>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    );
}

export default InstallMetaMask;
