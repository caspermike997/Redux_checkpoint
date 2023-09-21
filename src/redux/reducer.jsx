const initialState = {
    tasks: [],
    filter: 'all',
    };
    
    const reducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD_TASK':
            return {
            ...state,
            tasks: [...state.tasks, action.payload],
            };
        case 'EDIT_TASK':
            return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload.id ? { ...task, description: action.payload.description } : task
            ),
            };
        case 'SET_FILTER':
            return {
            ...state,
            filter: action.payload,
            };
        default:
            return state;
        }
    };
    
    export default reducer;
    