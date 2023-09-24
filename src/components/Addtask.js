import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = ({ addTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') return;
        addTask(description);
        setDescription('');
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a new task..."
            className='in'
        />
        <button type="submit" className='btn'>Add Task</button>
        </form>
        </div>
    );
};

export default connect(null, { addTask })(AddTask);
