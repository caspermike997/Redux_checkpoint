import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Task from './Task';

const ListTask = ({ tasks, filter, setFilter }) => {
    const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.isDone === (filter === 'done'));

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div>
        <div >
            <button className='btn' onClick={() => handleFilterChange('all')}>All</button>
            <button className='btn' onClick={() => handleFilterChange('done')}>Done</button>
            <button className='btn' onClick={() => handleFilterChange('not-done')}>Not Done</button>
        </div>
        {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
        ))}
        </div>
    );
    };

    const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filter,
    };
};

export default connect(mapStateToProps, { setFilter })(ListTask);
