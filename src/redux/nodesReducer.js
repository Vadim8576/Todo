import { api } from './../api/api';

const ADD_NODE = 'ADD_NODE';
const TOGGLE = 'TOGGLE';
const REMOVE_NODE = 'REMOVE_NODE';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const FETCH_NODES = 'FETCH_NODES';
const SHOW_ERROR = 'SHOW_ERROR';
// const REMOVE_SELECTED = 'REMOVE_SELECTED';


const initialState = {
    nodes: [],
    loading: false,
    isError: false
}



const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NODE:
            return {
                ...state,
                nodes: [...state.nodes, action.payload]
            }
        case TOGGLE:

            return {
                ...state,
                nodes: state.nodes.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.selected = !todo.selected;
                        // console.log('todo', todo);
                    }
                    return todo;
                })
            }
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

        case FETCH_NODES: {
            // console.log('FETCH_NODES');
            return {
                ...state,
                nodes: action.payload
            }
        }
        case SHOW_ERROR:
            return {
                ...state,
                isError: true
            }

        default:
            return state;
    }
}


export default reducer;


const checkedToggleAC = (id) => ({ type: 'TOGGLE', payload: id });
export const showError = () => ({ type: 'SHOW_ERROR' });
export const showLoader = () => ({ type: 'SHOW_LOADER' });
export const hideLoader = () => ({ type: 'HIDE_LOADER' })
const addNodeAC = (node) => ({ type: 'ADD_NODE', payload: node });
const removeNodeAC = (id) => ({ type: 'REMOVE_NODE', payload: id });
const fetchNodes = (nodes) => ({ type: 'FETCH_NODES', payload: nodes });
// const removeSelectedAC = () => ({ type: 'REMOVE_SELECTED' });




export const checkedToggle = (id) => (dispatch) => {
    dispatch(checkedToggleAC(id));
}

export const removeNode = (id) => (dispatch) => {

    const response = api.removeNode(id);
    response.then(response => {
        if (response === null) {
            dispatch(removeNodeAC(id));
        } else {
            dispatch(showError());
        }
    })
}

export const removeSelected = (nodes) => (dispatch) => {

    (async function(){    
        const promises = nodes.map(node => {
            if (node.selected) {
                const response = api.removeNode(node.id);
                response.then(response => {
                    if (response === null) {
                        dispatch(removeNodeAC(node.id));
                        // console.log('remove');
                    } else {
                        dispatch(showError());
                    }
                })
            }
            return node;
        })
        await Promise.all(promises);
        // alert('done!');
    })();
}


export const getNodes = () => (dispatch) => {

    dispatch(showLoader());

    const response = api.fetchNodes();
    response.then(response => {
        // console.log(response);
        if (response) {
            const nodes = Object.keys(response).map(key => {
                return {
                    ...response[key],
                    id: key
                }
            });
            dispatch(fetchNodes(nodes));
            dispatch(hideLoader());
        } else {
            dispatch(showError());
        }
    })


}


export const addNode = (payload) => (dispatch) => {

    const response = api.addNode(payload);
    response.then(response => {

        if (response) {
            payload.id = response.name;

            dispatch(addNodeAC(payload));
            // console.log(payload);

            // При добавлении НОДЫ делать запрос на сервер для получения нового списка
            // dispatch(getNodes());
        } else {
            dispatch(showError());
        }
    })

}

