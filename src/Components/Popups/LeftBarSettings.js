"use client"
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LeftBarSettings = ({selectTheme, theme}) => {

    return (
        <div className="profilenavMainSection" style={{ zIndex: 99999, display: 'unset' }}>
            <div className="profilenavMidleArea">
                <p className="profilenavMidleArea_label">Account details</p>
                <span className="linkAccount">Edit profile</span>
                <span className="linkAccount">Change password</span>
                <div className="profileNavContainer_line"></div>
                <p className="profilenavMidleArea_label">Manage Account</p>
                <span className="linkAccount theme">Switch Theme
                    <span className="themeMenu">
                        <span
                            className={classNames('themeMode', theme === 'light' ? 'active' : '')}
                            onClick={() => selectTheme('light')}>Light mode</span>
                        <span
                            onClick={() => selectTheme('dark')}
                            className={classNames('themeMode', theme === 'dark' ? 'active' : '')}>Dark mode</span>
                    </span>
                </span>
                <div className="profileNavContainer_line"></div>
                <p className="profilenavMidleArea_label">Advanced</p>
                <Link className="nodecoration" href="/connect/notification"><span className="linkAccount">All Notifications </span></Link>
                <span className="nodecoration"><span className="linkAccount">Archived Rooms </span></span>
                <span className="nodecoration"><span className="linkAccount"><span>Manage Personal Tags</span></span></span>
                <Link className="nodecoration" href="/connect/admin"><span className="linkAccount">Admin settings</span></Link>
                <div className="profileNavContainer_line"></div>
                <p className="profilenavMidleArea_label">Help</p>
                <span className="nodecoration"><span className="linkAccount">Install Desktop Application</span></span>
                <span className="linkAccount">Tour for tips and suggestions</span>
                <span className="nodecoration"><span className="linkAccount"><span>Workfreeli Support</span></span></span>
            </div>
            <div className="profileNavContainer_line"></div>
            <span className="linkAccount signout">Sign out
                <span className="signout_menu">
                    <a className="nodecoration" href="/logout">
                        <span className="themeMode border_bottom">From this device</span>
                    </a>
                </span>
            </span>
        </div>
    );
};

export default LeftBarSettings;