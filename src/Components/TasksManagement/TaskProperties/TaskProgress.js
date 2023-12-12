"use client";
import React, { useState } from 'react';

const TaskProgress = () => {
    const [progress, setProgress] = useState('Not Defined');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
        setDropdownOpen(false);
        // You can perform any additional actions based on the new progress here
    };
    return (
        <div className="date_area" style={{ width: '43%' }}>
            <p className="date_label">Progress</p>
            <div className="dropdown" tabIndex="1">
                <div
                    className={`dropdown-header forProgress ${dropdownOpen ? 'open' : ''}`}
                    style={{ backgroundColor: '#3262C2', borderRadius: '4px' }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {progress}
                    <i className={`fa fa-chevron-${dropdownOpen ? 'down' : 'right'} icon open`} />
                </div>
                {dropdownOpen && (
                    <div>
                        <div className="dropdown-body open">
                            <div className={`dropdown-item ${progress === 'Not Defined' ? 'selected' : ''}`} id="1" onClick={() => handleProgressChange('Not Defined')}>
                                <span className="dropdown-item-dot selected"></span>Not Defined
                            </div>
                            <div className={`dropdown-item ${progress === 'Stage 1' ? 'selected' : ''}`} id="2" onClick={() => handleProgressChange('Stage 1')}>
                                <span className="dropdown-item-dot false"></span>Stage 1
                            </div>
                            <div className={`dropdown-item ${progress === 'Stage 2' ? 'selected' : ''}`} id="3" onClick={() => handleProgressChange('Stage 2')}>
                                <span className="dropdown-item-dot false"></span>Stage 2
                            </div>
                            <div className={`dropdown-item ${progress === 'Stage 3' ? 'selected' : ''}`} id="4" onClick={() => handleProgressChange('Stage 3')}>
                                <span className="dropdown-item-dot false"></span>Stage 3
                            </div>
                            <div className={`dropdown-item ${progress === 'Final stage' ? 'selected' : ''}`} id="5" onClick={() => handleProgressChange('Final stage')}>
                                <span className="dropdown-item-dot false"></span>Final stage
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskProgress;