"use client";
import EditorBox from '@/Components/ChatScreen/Editor/EditorBox';
import TaskEditorBox from '@/Components/ChatScreen/Editor/TaskEditorBox';
import Image from 'next/image';
import React, { useState } from 'react';
import userImage from '../../../../public/media/images/img.png'

const TaskChatSections = () => {
    const [activeTab, setActiveTab] = useState('Discussion'); // Use state to track the active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='task_chat_section'>
            <div className='taskChatBox'>
                <div className="taskChatBoxHeader forChatbox">
                    <div className={`taskHeadlabel ${activeTab === 'Discussion' ? 'active' : ''}`} style={{ marginRight: '32px' }}>
                        <span className="tasklabel active" onClick={() => handleTabClick('Discussion')}>Discussion</span>
                    </div>
                    <div className="lineVertical"></div>
                    <div className={`taskHeadlabel ${activeTab === 'Notifications' ? 'active' : ''}`} style={{ paddingLeft: '16px' }}>
                        <span className="tasklabel" onClick={() => handleTabClick('Notifications')}>Notifications</span>
                    </div>
                    <div className="taskHeadExpand_icon" data-for="chat_tooltip" data-tip="Click to expand" currentitem="false" style={{ position: 'relative', right: '0px' }}>
                        <span className="expand_icon_chat"></span>
                    </div>
                </div>
                {
                    activeTab === 'Discussion' ?
                        <div className="discussionArea">
                            <div className="messageDiv">
                                <div className="msgSeparator discussion"></div>

                                {/* Sample Messages */}
                                <div className="msgssenge_chatbox !pb-0 pt-1">
                                    <div className="msgssenge !py-0">
                                        <p className="msg_sender_name">Abdul Aual Sobuj</p>
                                        <p className="msg_sender_time">12:18 PM <p className="is_delivered"> - Delivered</p></p>
                                    </div>
                                    <div style={{ fontSize: '12px' }} className="mesg_text !pt-0">No Comments!</div>
                                </div>
                                <div className="msgssenge_chatbox !pb-0 pt-1">
                                    <div className="msgssenge !py-0">
                                        <p className="msg_sender_name">Abdul Aual Sobuj</p>
                                        <p className="msg_sender_time">12:18 PM <p className="is_delivered"> - Delivered</p></p>
                                    </div>
                                    <div style={{ fontSize: '12px' }} className="mesg_text !pt-0">No Comments!</div>
                                </div>
                                <div className="msgssenge_chatbox !pb-0 pt-1">
                                    <div className="msgssenge !py-0">
                                        <p className="msg_sender_name">Abdul Aual Sobuj</p>
                                        <p className="msg_sender_time">12:18 PM <p className="is_delivered"> - Delivered</p></p>
                                    </div>
                                    <div style={{ fontSize: '12px' }} className="mesg_text !pt-0">No Comments!</div>
                                </div>
                            </div>
                            <div id="bottomBox" className="bottom_bar bottomBox_reply taskChatArea bottomBox_task">
                                <TaskEditorBox />
                            </div>
                        </div> :
                        <div className="user_msg" style={{ padding: '7px 30px' }}>
                            <div className="sender_img">
                                <Image src={userImage} alt="user" />
                            </div>
                            <div className="msg_info">
                                <div className="sender_info">
                                    <p className="sender_name">Shakil Ahmed</p>
                                    <p className="msg_time">
                                        <i className="fas fa-clock custom_clock_size"></i> Test Shakil
                                    </p>
                                </div>
                                <div className="msg_body">Test Message</div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default TaskChatSections;