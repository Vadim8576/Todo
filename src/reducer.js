const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD':
            // console.log('add', Date.now());
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case 'TOGGLE': {
            // console.log('toggle');
            return state.map(todo => {
               
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    console.log('toggle', todo.completed);
                }
                return todo;
            })
        }
        case 'REMOVE': {
            console.log('remove');
            return state.filter(todo => todo.id !== action.payload);
        }
        default:
            return state;
    }
}


export default reducer;

export const checkedToggle = (id) => ({type: 'TOGGLE', payload: id});