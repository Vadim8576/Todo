export default function(state, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case 'TOGGLE': 
            return state.map(todo => {
               
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    console.log(todo);
                }
                return todo;
            })
        case 'REMOVE':
           
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }
}