import React from 'react';
import { useStore } from '../contextAPI/GlobalState';


function Nav() {

    const [state, dispatch] = useStore();

    return (
        <nav className="navbar is-link" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <strong><i className="fa fa-coins"></i> {state.appName}</strong>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item">
                        <div className="tags has-addons">
                            <span className="tag">
                                <i className="fa fa-signal"></i> &nbsp; Network
                            </span>
                            <span className="tag is-danger">{state.network}</span>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
