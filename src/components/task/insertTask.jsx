import React from 'react';
import './task.css';

function InsertTask() {
    return (
        <div className='insertTask'>
        <h3>Enter Task Name</h3>
        <form className='form-body'>
        <input type="text" name="taskname" className="input-style" />
        <button className="taskButton">Add Task</button>
        </form>
        </div>
    );
}

export default InsertTask;