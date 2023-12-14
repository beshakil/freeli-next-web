"use client";
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TaskFiles = () => {
    const [taskFile, setTaskFile] = React.useState(false);
    return (
        <div className="right_part fileQuickTask">
            <div className="track_area" onClick={() => setTaskFile(!taskFile)}>
                <div className="file_label">
                    Files
                    <div className="file_counter_last_area">
                        <div className="file_counter" data-for="properties_tooltip" data-tip="Attach files">
                            <p>(0)</p>
                        </div>
                    </div>
                </div>
                <span className="downArrowSpan">
                    <MdOutlineKeyboardArrowDown className={`text-[#318fff] text-2xl ${taskFile ? 'rotate-180' : ''}`} />
                </span>
            </div>
            {
                taskFile &&
                <div className="middle_area">
                    <div className="file_area">
                        <div className="file_icon"></div>
                        <div className="file_text">This task has no files</div>
                        <div className="file_add" data-for="properties_tooltip" data-tip="Attach files">
                            Add A File
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TaskFiles;