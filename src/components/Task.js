import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../actions';

const Task = ({ task, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (editedDescription.trim() === '') return;
        editTask(task.id, editedDescription);
        setIsEditing(false);
    };

    return (
        <div>
        {!isEditing ? (
            <div>
            <span>{task.description}</span>
            <button onClick={handleEdit}>Edit</button>
            </div>
        ) : (
            <div>
            <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            </div>
        )}
        </div>
    );
};

export default connect(null, { editTask })(Task);
