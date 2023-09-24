export const addTask = (description) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime(),
            description,
            isDone: false,
        },
        };
    };
    
    export const editTask = (id, description) => {
        return {
        type: 'EDIT_TASK',
        payload: {
            id,
            description,
        },
        };
    };
    
    export const setFilter = (filter) => {
        return {
        type: 'SET_FILTER',
        payload: filter,
        };
    };
    