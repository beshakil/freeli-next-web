"use client"
import React, { useState } from 'react';

const TaskStatus = () => {
    const [status, setStatus] = useState('Not Started');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        setDropdownOpen(false);
        // You can perform any additional actions based on the new status here
    };
    return (
        <div className="status_area" style={{ display: 'block', width: '43%', position: 'relative' }}>
            <p className="date_label">Status</p>
            <div className="dropdown" tabIndex="0">
                <div
                    className={`dropdown-header rounded forProgress ${dropdownOpen ? 'open' : ''}`}
                    style={status === 'In Progress' ? { backgroundColor: '#FFAF4C' } : status === 'Not Started' ? { backgroundColor: '#5B6477' } : status === 'Completed' ? { backgroundColor: '#7DB52A' } : status === 'On Hold' ? { backgroundColor: '#032E84' } : status === 'Cancelled' ? { backgroundColor: '#032E84' } : { backgroundColor: '#5B6477' }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {status}
                    <i className={`fa fa-chevron-${dropdownOpen ? 'down' : 'right'} icon`} />
                </div>
                {dropdownOpen && (
                    <div>
                        <div className="dropdown-body open">
                            <div className={`dropdown-item ${status === 'Not Started' ? 'selected' : ''}`} id="Not Started" onClick={() => handleStatusChange('Not Started')}>
                                <span className="dropdown-item-dot selected"></span>Not Started
                            </div>
                            <div className={`dropdown-item ${status === 'In Progress' ? 'selected' : ''}`} id="In Progress" onClick={() => handleStatusChange('In Progress')}>
                                <span className="dropdown-item-dot false"></span>In Progress
                            </div>
                            <div className={`dropdown-item ${status === 'Completed' ? 'selected' : ''}`} id="Completed" onClick={() => handleStatusChange('Completed')}>
                                <span className="dropdown-item-dot false"></span>Completed
                            </div>
                            <div className={`dropdown-item ${status === 'On Hold' ? 'selected' : ''}`} id="On Hold" onClick={() => handleStatusChange('On Hold')}>
                                <span className="dropdown-item-dot false"></span>On Hold
                            </div>
                            <div className={`dropdown-item ${status === 'Canceled' ? 'selected' : ''}`} id="Canceled" onClick={() => handleStatusChange('Canceled')}>
                                <span className="dropdown-item-dot false"></span>Canceled
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskStatus;