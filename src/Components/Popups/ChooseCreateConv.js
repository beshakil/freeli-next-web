"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import ReactTooltip from 'react-tooltip';
import Link from 'next/link';
import DirectSMS from '../Connect/DirectSMS';
function ChooseCreateConv(props) {

    const [directSMSPopup, setDirectSMSPopup] = useState(false);

    const handleDirectSMSPopup = () => {
        setDirectSMSPopup(true);
    }

    return (
        <>
            <ReactTooltip id="chooseConv_tooltip" type="dark" />
            {
                directSMSPopup === true ? <DirectSMS setDirectSMSPopup={setDirectSMSPopup} /> :
                    <div className="backwrap">
                        <div className="chooseCreateConv">

                            <div className="closePopup" onClick={() => {
                                props.setchooseCreate(false)
                            }} ></div>

                            <h2 className="popup_title">Start a discussion</h2>
                            <div className="PopupContent">
                                <div className="createConv_type _single" onClick={handleDirectSMSPopup}>
                                    <span className="createTypeIcon"></span>
                                    <span>Direct Message</span>
                                </div>
                                <Link href="/connect/room" className="createConv_type _group" >
                                    <span className="createTypeIcon"></span>
                                    <span>Create Room</span>
                                </Link>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}


export default ChooseCreateConv;