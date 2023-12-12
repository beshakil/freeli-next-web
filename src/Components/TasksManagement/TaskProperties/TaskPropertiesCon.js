"use client";
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { MdOutlineAdd, MdAdd } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import { BsFillTrash3Fill } from "react-icons/bs";
import TaskStatus from './TaskStatus';
import TaskProgress from './TaskProgress';
import TaskStartEndDate from './TaskStartEndDate';

const TaskPropertiesCon = ({ setTaskPropertiesPopup }) => {
    const [selectedUserPopup, setSelectedUserPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const demoUsers = ['Shakil Ahmed', 'Abdul Aual Sobuj', 'Fifth Room From Next', 'Shakil Test', 'Md. Mamun Or rashid rajon', 'Md. Sadequr Rahman', 'Hasnat Ovee'];

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleRemoveUser = () => {
        setSelectedUser('');
    };

    const handleSelectedUserPopupOpen = () => {
        setSelectedUserPopup(true);
    }
    const [isEditTitle, setIsEditTitle] = useState(false);  // State to track whether the title is in edit mode

    const [addKeyWordPopup, setAddKeyWordPopup] = useState(false);
    const [keywords, setKeywords] = useState(['hello word', 'NO WORD', 'DSDS']);
    const [newKeyword, setNewKeyword] = useState('');

    const addKeyword = () => {
        if (newKeyword.trim() !== '') {
            setKeywords([...keywords, newKeyword.trim()]);
            setNewKeyword('');
        }
    };

    const removeKeyword = (index) => {
        const updatedKeywords = [...keywords];
        updatedKeywords.splice(index, 1);
        setKeywords(updatedKeywords);
    };

    const [review, setReview] = useState(true);


    return (
        <div className='task_right_container forQuickViewTask'>
            {/* <div className="adminRightHead taskHeader" style={{ paddingLeft: '20px' }}>
                <span className="closeAdminPanel" onClick={() => setTaskPropertiesPopup(false)}></span>
                <div className="taskHeader_right_area">
                    <span className="Duetomorrow"></span>
                </div>
            </div> */}
            <div className="adminRightHead taskHeader" style={{ paddingLeft: '20px' }}>
                <span className="closeAdminPanel cursor-pointer" onClick={() => setTaskPropertiesPopup(false)}></span>
                <div className="taskHeader_right_area">
                    <span className="Duetomorrow"></span>
                    <span className="task_delete_sec">
                        <BsFillTrash3Fill className='text-lg' style={{ color: 'rgb(0, 36, 110)' }} />
                    </span>
                </div>
            </div>
            <div className='task_body_area'>
                <div className='task_body_container'>
                    <div className="task_body_left quickShowTask">
                        <div className="quickViewTop">
                            {
                                selectedUserPopup === false &&
                                <div className="task-room-name selectBox">
                                    <div className="conversation_name_label" onClick={handleSelectedUserPopupOpen}>
                                        <span className="taskRoomTitleLabel">Shakil Test</span>
                                        <span className="editFile" style={{ display: 'flex', right: '-23px', top: '4px' }}></span>
                                    </div>
                                </div>
                            }

                            {
                                selectedUserPopup === true &&
                                <OutsideClickHandler onOutsideClick={() => setSelectedUserPopup(false)}>
                                    <div className="task-room-name selectBox newRow">
                                        <div className="taskTeamDetails forTaskproperties true">
                                            <div className="taskTeamInsight_info">
                                                <div className="AssigneeField roomTaskproperties true">
                                                    <div className="userDropDownArea">
                                                        <ul className="usersGroup"></ul>
                                                        <div className="ellipsis" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                                                            {selectedUser ? (
                                                                <>
                                                                    <span className="selectOnew" style={{ width: 'auto' }}>{selectedUser}</span>
                                                                </>
                                                            ) : (
                                                                <span className="selectOnew" style={{ width: 'auto' }}>No user selected</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="dropdown" style={{ backgroundColor: 'transparent' }}>
                                                        <div className="dropdown-header"><i className="fa fa-chevron-right icon open" style={{ color: 'black' }}></i></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ marginTop: '1px', marginLeft: '0px', width: '70%' }}>
                                                    <div className="keywordItem">
                                                        <div className="searchAndFilterBar " style={{ position: 'relative' }}>
                                                            {selectedUser ? <div className="selectedRoomCont">
                                                                <span className="tags_Color">{selectedUser}
                                                                    <MdOutlineCancel onClick={handleRemoveUser} style={{ marginLeft: '5px', fontSize: '18px', cursor: 'pointer' }} />
                                                                </span>
                                                            </div> : ""
                                                            }
                                                            <div className="searchareaDiv">
                                                                <input style={{ width: '96%' }} className="_inputBar searchLeft mr-2 ml-2"
                                                                    type="text"
                                                                    placeholder="Search Room"
                                                                    value={searchValue}
                                                                    onChange={handleSearchChange}
                                                                />
                                                                <div className="keyword_list_task_settings workloadUsers">
                                                                    {demoUsers
                                                                        .filter((user) => user.toLowerCase().includes(searchValue.toLowerCase()))
                                                                        .map((user, index) => (
                                                                            <p key={index} className="_tag_rooms" onClick={() => handleUserSelect(user)}>
                                                                                {user}
                                                                            </p>
                                                                        ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OutsideClickHandler>
                            }

                            {
                                isEditTitle === true ?
                                    <div className="taskTitle_div">
                                        <input
                                            type="text"
                                            className="taskTitle"
                                            name="taskTitle"
                                            id="taskTitle"
                                            placeholder="Add a task title"
                                            maxLength="72"
                                        />
                                        <MdOutlineCancel onClick={() => setIsEditTitle(false)} className='absolute top-[6px] right-3 text-red-600 text-lg' />
                                    </div> :
                                    <div className="taskTitle_div group">
                                        <p className="titleHeading">Test One Task</p>
                                        <span className="hidden group-hover:block editFileIcon" onClick={() => setIsEditTitle(true)}></span>
                                    </div>
                            }

                            <div className="creator_area leftArea" style={{ height: '34.5px', borderBottom: 'unset', paddingLeft: '0px', marginTop: '0px' }}>
                                <div className="creator_label inlineText" style={{ width: 'auto' }}>
                                    Created by <p>Manzurul Alam</p><span>dated on Nov 26th, 2023</span>
                                </div>
                            </div>
                            <div className="new_area">
                                <div className="flagIcom_area">
                                    <div className="fill_flagIcom"></div>
                                    <div className="keywords_area">
                                        {keywords.map((keyword, index) => (
                                            <div key={index} className="singleKeyword">
                                                {keyword}
                                                <span
                                                    className="removeFile"
                                                    style={{ right: '-7px', top: '-1px', display: 'block', position: 'relative', width: '14px', height: '14px', backgroundSize: '8px', border: '1px solid red' }}
                                                    onClick={() => removeKeyword(index)}
                                                ></span>
                                            </div>
                                        ))}
                                    </div>

                                    <OutsideClickHandler onOutsideClick={() => setAddKeyWordPopup(false)}>
                                        {
                                            addKeyWordPopup === true ?
                                                <div className="addKeyword_section myTask">
                                                    <span className="priority_icon">
                                                        <span className="plusIcon">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 24 24"
                                                                color="#0079d1"
                                                                height="16"
                                                                width="16"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                style={{ color: 'rgb(0, 121, 209)' }}
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>

                                                        <div className="keyword_div">
                                                            <input
                                                                type="text"
                                                                className="markPriority task"
                                                                name="addkeyword"
                                                                id="addkeyword"
                                                                placeholder="Add a keyword"
                                                                maxLength="32"
                                                                value={newKeyword}
                                                                onChange={(e) => setNewKeyword(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="AddKeywordsPopup_task_settings insightTaskBoard keywordsLists" style={{ width: '100%', maxHeight: '380px', overflowY: 'auto', marginTop: '1px', marginLeft: '0px' }}>
                                                            <div className="searchareaDiv"></div>
                                                            {keywords.length === 0 && <p className="_tag_rooms">NO WORD</p>}
                                                            {keywords.map((keyword, index) => (
                                                                <p key={index} className="_tag_rooms">
                                                                    {keyword}
                                                                </p>
                                                            ))}
                                                            {
                                                                newKeyword.length > 0 &&
                                                                <div className="saveArea" onClick={addKeyword}>Create keyword</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div> : <div className="addKeyword_section myTask" onClick={() => setAddKeyWordPopup(true)}>
                                                    <div className="addselectKeywordsdiv">
                                                        <MdAdd style={{ color: '#5b6477', height: '16px', width: '16px' }} />
                                                        <span className="newAddText">Add a keyword</span>
                                                    </div>
                                                </div>
                                        }
                                    </OutsideClickHandler>
                                </div>
                            </div>
                        </div>
                        <div className='first_section'>
                            <div className='statuAndProgress_area'>
                                <TaskStatus />
                                <TaskProgress />
                                <div className='date_area' style={{ width: '14%' }}>
                                    <p className='date_label'>Review</p>
                                    <div className={classNames('toggle-button-cover')}
                                        style={{ left: '0px' }}
                                    >
                                        <input className='cm-toggle'
                                            defaultChecked={review}
                                            onChange={() => setReview(!review)}
                                            value={review}
                                            type='checkbox' />
                                    </div>
                                </div>
                            </div>
                            <div className='first_task_area pb-4 pt-4'>
                                <TaskStartEndDate />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskPropertiesCon;