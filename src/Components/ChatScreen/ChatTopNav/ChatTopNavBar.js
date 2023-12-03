
"use client"
import React, { useState, useEffect, useRef } from 'react';
import classNames from "classnames";
import ReactTooltip, { Tooltip } from 'react-tooltip';
// import ImgsViewer from "react-images-viewer";
import OutsideClickHandler from 'react-outside-click-handler';
import toast from 'react-hot-toast';
import { MdKeyboardArrowDown } from "react-icons/md";
function ChatTopNavBar(props) {
    // console.log(28,props)

    const [openHeadMoreOptions, setOpenHeadMoreOptions] = useState(false);
    const [headSearchOptions, setHeadSearchOptions] = useState(false);
    const [searchRoomListOptions, setSearchRoomListOptions] = useState(false);
    const [roomMoreOptions, setRoomMoreOptions] = useState(false);
    // const [searchVal, setSearchVal] = useState('')

    useEffect(() => {
        const hideCom = localStorage.getItem("hideCompTool");
        // console.log("visible", visible);
        if (hideCom === 'true') {
            //  props.setHideComponent(true);

        } else {
            // props.setHideComponent(false);
        }

    }, []);

    return (
        <>
            <div className={classNames("top_bar",
                //props.popup.convSearchSec ? 'convSearchActive' : ''
            )}>
                <div className={classNames("part_top_bar single",
                    // props.logindata.active_conv.details.group === 'yes' ? 'group' : 'single'
                )}>
                    <div className={"conv_img online"}>
                        <h3 className="nameLetters">{'M'}</h3>
                    </div>

                    <div className="conv_desc">
                        <h3 className="conv_name" title="ITL Meeting">ITL Meeting</h3>
                        <p className="conv_info">
                            <span className="">17</span>
                            <span className="middleBar" style={{ padding: '0px' }}>|</span>
                            <span className=""> ITL Dev Team</span>
                        </p>
                    </div>
                </div>

                {headSearchOptions === true ?
                    <>
                        <div className="allSearchSection">
                            <div className="searchPartsContainer">
                                <div className="searchSelectionSection" style={searchRoomListOptions ? { pointerEvents: 'none' } : {}} onClick={() => setSearchRoomListOptions(!searchRoomListOptions)}><span>Room</span>
                                    <MdKeyboardArrowDown className='ml-1 mr-1' />
                                </div>
                                <input id="searchSecTop" className="allSearchInput" type="text" placeholder="Search a message" value="" /><span className="clearAllSrcTest" data-for="top_head" data-tip="Clear Search"></span>
                                <div className="vl"></div>
                                <div className="voiceIcon1" data-for="top_head" data-tip="Voice to text. Say 'clear' to clear text and 'search' for searching"></div>
                                <div className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                            </div>
                            <span className="closeConnectSearch" onClick={() => setHeadSearchOptions(false)}></span>
                            {
                                searchRoomListOptions &&
                                <OutsideClickHandler onOutsideClick={() => setSearchRoomListOptions(false)}>
                                    <ul className="searchSelectionPopup">
                                        <li className="">All file(s)</li>
                                        <li className="">Image(s)</li>
                                        <li className="">Video(s)</li>
                                        <li className="">Audio(s)</li>
                                        <li className="">Docs(s)</li>
                                    </ul>
                                </OutsideClickHandler>
                            }
                        </div>

                    </>
                    :
                    <div className="part_top_bar">
                        <div className="part_top_bar">
                            <h3 style={{ width: '120px' }} className="file_opt tooltip2" data-for="top_head" data-tip="Create a task">
                                Create task
                            </h3>
                        </div>
                        <div className="part_top_bar">
                            <h3 className="file_opt tooltip2" data-for="top_head" data-tip="Files"
                            >Files</h3>
                        </div>
                        <div className="part_top_bar">
                            <div onClick={() => setOpenHeadMoreOptions(!openHeadMoreOptions)}
                                className={classNames("opt_icons conv_filter", openHeadMoreOptions ? 'active' : "")}
                                data-for="top_head" data-tip="Filters">
                            </div>
                        </div>
                        <div className={classNames("opt_icons conv_voice")} data-for="top_head" data-tip="Start a call"></div>
                        <div id="my-tooltip" className="opt_icons conv_search" onClick={() => setHeadSearchOptions(!headSearchOptions)}></div>
                        <Tooltip anchorSelect="#my-tooltip" content="Search this channel"></Tooltip>
                        <div onClick={() => setRoomMoreOptions(!roomMoreOptions)} style={roomMoreOptions ? { pointerEvents: 'none' } : {}} className={`${roomMoreOptions ? 'active' : ''} opt_icons conv_more`} data-for="top_head" data-tip="More options"></div>
                    </div>
                }
            </div>
            {
                openHeadMoreOptions &&
                <OutsideClickHandler onOutsideClick={() => setOpenHeadMoreOptions(false)}>
                    <div className="moreMenuPopup">
                        <span className="viewOnly">View only:</span>
                        <li className="moreOpt_list _threadFilter lock">Private messages</li>
                        <li className="moreOpt_list _callFilter">Threaded messages</li>
                        <li className="moreOpt_list _threadFilter link">Messages with links</li>
                        <li className="moreOpt_list _threadFilter msg_title">Messages with title</li>
                        <li className="moreOpt_list _threadFilter file media">Messages with files</li>
                        <li className="moreOpt_list _threadFilter file voice">Messages with voice</li>
                        <li className="moreOpt_list _threadFilter star">Messages with starred files</li>
                        <li className="moreOpt_list _threadFilter flag">Flagged messages</li>
                        <li className="moreOpt_list _threadFilter" style={{ display: 'block' }}>New/Unread messages</li>
                    </div>
                </OutsideClickHandler>
            }
            {
                roomMoreOptions &&
                <OutsideClickHandler onOutsideClick={() => setRoomMoreOptions(false)}>
                    <div className="moreMenuPopup" style={{ right: '45px' }}>
                        <ul>
                            <li className="moreOpt_list _muteConv">Mute this room</li>
                            <li className="moreOpt_list _pingConv">Pin this room</li>
                            <li className="optionalList moreOpt_list mark">Mark all as read in this room</li>
                            <li className="optionalList moreOpt_list location">Share location</li>
                        </ul>
                    </div>
                </OutsideClickHandler>
            }
        </>
    )
}

export default ChatTopNavBar;