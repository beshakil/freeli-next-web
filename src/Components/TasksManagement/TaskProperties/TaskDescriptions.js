"use client"
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TaskDescriptions = () => {
    const [taskDescriptions, setTaskDescriptions] = React.useState(false);
    return (
        <div className="task_describe_section">
            <div className="notes_label_area" onClick={() => setTaskDescriptions(!taskDescriptions)}>
                <p className="notes_label">Description</p>
                <MdOutlineKeyboardArrowDown className={`text-[#318fff] text-[25px] ${taskDescriptions === true ? 'rotate-180' : ''}`} />
            </div>
            {
                taskDescriptions &&
                <textarea
                    className="youtnotesTextArea"
                    name="description"
                    id="youtnotesTextArea"
                    rows="3"
                    placeholder="Write a description..."
                ></textarea>
            }
        </div>
    );
};

export default TaskDescriptions;