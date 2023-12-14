"use client";
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TaskNotes = () => {
    const [taskNote, setTaskNote] = React.useState(false);
    return (
        <div className="yourNotes">
            <div className="notes_label_area" onClick={() => setTaskNote(!taskNote)}>
                <p className="notes_label">Your Notes</p>
                <span className="downArrowSpan">
                <MdOutlineKeyboardArrowDown className={`text-[#318fff] text-2xl ${taskNote ? 'rotate-180' : ''}`} />
                </span>
            </div>
            {
                taskNote &&
                <>
                    <textarea
                        className="youtnotesTextArea"
                        name="notes"
                        id="youtnotesTextArea"
                        rows="3"
                        placeholder="Add a note"
                    ></textarea>
                    <div
                        className="voiceIcon1MsgBox"
                        data-for="top_head"
                        data-tip="Click voice to text. 'send', => message send, 'clear' => clear text, 'Enter' => new line"
                    ></div>
                </>
            }
        </div>
    );
};

export default TaskNotes;