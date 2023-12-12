"use client";
import React, { useState } from 'react';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { BsFillTrash3Fill, BsStopwatch, BsXLg } from "react-icons/bs";

const TaskDueTime = () => {
    const [showEnter, setShowEnter] = useState(true);
    const defaultTime = new Date();
    defaultTime.setHours(11); // Set the default hour value (0-23)
    defaultTime.setMinutes(59); // Set the default minute value (0-59)
    const [due_time, setDue_time] = useState(defaultTime);

    const handleTimeChange = (newValue) => {
        setDue_time(newValue);
    };

    return (
        <div className="dueTime">
            <p className='date_label' style={{ marginTop: '0px' }}>Due Time</p>
            <div
                onMouseEnter={() => setShowEnter(false)}
                onMouseLeave={() => setShowEnter(true)}
                className='date_area_div'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileTimePicker
                        className='due_time'
                        value={due_time}
                        onChange={handleTimeChange}
                        renderInput={(params) =>
                            <TextField {...params}
                                className="dueTimeInput"
                                style={{fontSize: '14px'}}
                                id="dueTime"
                            />

                        }
                    />
                </LocalizationProvider>
                {/* {props.filteredUsers.length > 0 ? '' :
                due_time !== '' ?
                    <span className='removeFile'
                        style={{ right: '7px', top: '33px' }}
                        onClick={() => setDue_time(new Date())}
                    ></span>
                    : ''
            } */}
                {/* {showEnter3 && <span style={{ top: '24px', right: '16px' }} className='newWatchIcon' ></span>} */}
                {/* <span style={{ top: '24px', right: '8px' }} className='vsCalenderIcon'>
                <BsStopwatch color={'#318fff'} size={22} />
            </span> */}

                {showEnter ?
                    <span style={{ top: '36px', right: '5px' }} className='absolute' >
                        <BsStopwatch color={'#318fff'} size={18} />
                    </span>
                    :
                    <span style={{ right: '5px', top: '36px', display: 'block' }} className='removeFile' >
                    </span>
                }
            </div>
        </div>
    );
};

export default TaskDueTime;