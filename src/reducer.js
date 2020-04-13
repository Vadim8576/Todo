import axios from 'axios';

const ADD_NOTE = 'ADD_NOTE';
const TOGGLE = 'TOGGLE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const SHOW_LOADER = 'SHOW_LOADER';
const FETCH_NOTES = 'FETCH_NOTES';

const url = 'https://react-todo-952bc.firebaseio.com';


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_NOTE:
            // return [
            //     ...state,
            //     {
            //         id: Date.now(),
            //         title: action.payload,
            //         completed: false
            //     }
            // ]
            return {
                ...state,
               notes: [...state.notes, action.payload]
            }

        case TOGGLE: 
            return state.map(todo => {
               
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    console.log('toggle', todo.completed);
                }
                return todo;
            })

        case REMOVE_NOTE: 
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case SHOW_LOADER: 
            return {
                ...state,
                loading: true
            }

        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload
            }

        default:
            return state;
    }
}


export default reducer;

export const checkedToggle = (id) => ({type: 'TOGGLE', payload: id});

export const showLoaderAC = () => ({type: 'SHOW_LOADER'})
export const addNoteAC = (note) => ({type: 'ADD_NOTE', payload: note});
export const removeNoteAC = (id) => ({type: 'REMOVE_NOTE', payload: id});
export const fetchNotesAC = (notes) => ({type: 'FETCH_NOTES', payload: notes})






export const fetchNotes = async () => {

    
    let resolve = await axios.get(`${url}/notes.json`);
  
    console.log('fetch Data', resolve.data);
        
  }




export const addNote = async (title) => {

    const node = {
        node: title, data: new Date().toJSON
    }


    try {
        const resolve = await axios.post(`${url}/notes.json`, node);
        console.log('add note', resolve.data);
    } catch (e) {
        throw new Error('e.message');
    }

    

    // dispatch(addNoteAC(note));
        
}


export const removeNote = async (id) => {

    await axios.delete(`${url}/notes/${id}.json`);
    // dispatch(removeNoteAC(id));
        
}