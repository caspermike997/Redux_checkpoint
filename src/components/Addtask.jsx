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
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
        </form>
    );
};

export default connect(null, { addTask })(AddTask);