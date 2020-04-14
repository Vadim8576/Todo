import axios from 'axios';
import {api} from './../api/api';

const ADD_NODE = 'ADD_NODE';
const TOGGLE = 'TOGGLE';
const REMOVE_NODE = 'REMOVE_NODE';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const FETCH_NODES = 'FETCH_NODES';

// const url = 'https://react-todo-952bc.firebaseio.com';

const initialState = {
    nodes: [],
    loading: false
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NODE: {
            console.log('addnode action');
            return {
                ...state,
               nodes: [...state.nodes, action.payload]
            }
        }
        case TOGGLE: 
            return state.map(todo => {
               
                if(todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    console.log('toggle', todo.completed);
                }
                return todo;
            })

        case REMOVE_NODE: 
            return {
                ...state,
                nodes: state.nodes.filter(node => node.id !== action.payload)
            }

        case SHOW_LOADER: 
            return {
                ...state,
                loading: true
            }

        case HIDE_LOADER: 
            return {
                ...state,
                loading: false
            }

        case FETCH_NODES:
            return {
                ...state,
                nodes: action.payload
            }

        default:
            return state;
    }
}


export default reducer;

export const checkedToggle = (id) => ({type: 'TOGGLE', payload: id});
export const showLoader = () => ({type: 'SHOW_LOADER'});
export const hideLoader = () => ({type: 'HIDE_LOADER'})
export const addNodeAC = (node) => ({type: 'ADD_NODE', payload: node});
export const removeNode = (id) => ({type: 'REMOVE_NODE', payload: id});
export const fetchNodes = (nodes) => ({type: 'FETCH_NODES', payload: nodes});


export const getNodes = () => (dispatch) => {

    console.log('getNodes');

    dispatch(showLoader());

    const response = api.fetchNodes();

    response.then(response => {
        console.log(response);
        if(response) {
            const nodes = Object.keys(response).map(key => {
                return {
                    ...response[key],
                    id: key 
                }
            });
            console.log(nodes);
            dispatch(fetchNodes(nodes));
            dispatch(hideLoader());
        }
        
    })  
}

export const addNode = (payload) => (dispatch) => {

    console.log('add');

    // dispatch(showLoader());

    const response = api.addNode(payload);
    response.then(response => {
        
        if(response) {
            console.log(response);
            dispatch(addNodeAC(payload));
            console.log(payload);
        }
    }) 
    
}
