import React from 'react';
import './taskmanagement.css';
import './TaskPartial.css';
import './taskmain.css';
import './taskSettings.css';
import './tasks.css';
import './quickTask.css';
import TaskManagementHome from '@/Components/TasksManagement/TaskManagementHome';


const page = () => {
    return (
        <>
            <TaskManagementHome/>
        </>
    );
};

export default page;