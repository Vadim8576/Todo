import { api } from './../api/api';
import { basket_api } from './../api/basket_api';

const ADD_NODE = 'ADD_NODE';
const TOGGLE = 'TOGGLE';
const REMOVE_NODE = 'REMOVE_NODE';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const FETCH_NODES = 'FETCH_NODES';
const SHOW_ERROR = 'SHOW_ERROR';



const ADD_IN_BASKET = 'ADD_IN_BASKET';
const FETCH_BASKET = 'FETCH_BASKET';
const REMOVE_BASKET = 'REMOVE_BASKET';


const DISABLE_BTN = 'DISABLE_BTN';
const ENABLE_BTN = 'ENABLE_BTN';


const initialState = {
    nodes: [],
    basket: [],
    loading: false,
    isError: false,
    btnIsEnabled: true
}



const nodesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ENABLE_BTN:
            return {
                ...state,
                btnIsEnabled: true
            }
        
        case DISABLE_BTN:
            return {
                ...state,
                btnIsEnabled: false
            }

       // ------------------- basket -------------------------

        case ADD_IN_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case FETCH_BASKET: {
            return {
                ...state,
                basket: action.payload
            }
        }
        case REMOVE_BASKET:
            return {
                ...state,
                basket: state.basket.filter(node => node.id !== action.payload)
            }

       
        // ------------------- nODES -------------------------
       
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


export default nodesReducer;



const enableBtnAC = () => ({ type: 'ENABLE_BTN' });
const disableBtnAC = () => ({ type: 'DISABLE_BTN' });

const checkedToggleAC = (id) => ({ type: 'TOGGLE', payload: id });
export const showError = () => ({ type: 'SHOW_ERROR' });
export const showLoader = () => ({ type: 'SHOW_LOADER' });
export const hideLoader = () => ({ type: 'HIDE_LOADER' })
const addNodeAC = (node) => ({ type: 'ADD_NODE', payload: node });
const removeNodeAC = (id) => ({ type: 'REMOVE_NODE', payload: id });
const fetchNodes = (nodes) => ({ type: 'FETCH_NODES', payload: nodes });

// ------------------- Basket -------------------------
const addInBasketAC = (node) => ({ type: 'ADD_IN_BASKET', payload: node });
const fetchBasket = (basket) => ({ type: 'FETCH_BASKET', payload: basket });
const removeBasketAC = (id) => ({ type: 'REMOVE_BASKET', payload: id });




export const enableBtn = () => (dispatch) => {
    dispatch(enableBtnAC());
}

export const disableBtn = () => (dispatch) => {
    dispatch(disableBtnAC());
}


export const getData = () => (dispatch) => {
    dispatch(getNodes());
    dispatch(getBasket());
}

export const checkedToggle = (id) => (dispatch) => {
    dispatch(checkedToggleAC(id));
}

export const removeNode = (id) => async (dispatch) => {

    const response = await api.removeNode(id);
   
    if (response === null) {
        dispatch(removeNodeAC(id));
    } else {
        dispatch(showError());
    }
   
}

export const removeSelected = (nodes) => (dispatch) => {

    (async function () {
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


export const getNodes = () => async (dispatch) => {

    dispatch(showLoader());

    const  response = await api.fetchNodes();
  
    if (response) {
        const nodes = Object.keys(response).map(key => {
            return {
                ...response[key],
                id: key
            }
        });
        dispatch(fetchNodes(nodes));
        dispatch(hideLoader());
        // если response null - на сервере нет данных (корзина пуста)
        // если response false - ошибка
    } else if (response !== null) {
        dispatch(showError());
    } else if(response === null) {
        dispatch(hideLoader());
    }

}


export const addNode = (payload) => async (dispatch) => {

    const response = await api.addNode(payload);
   
    if (response) {
        payload.id = response.name;
        dispatch(addNodeAC(payload));
    } else {
        dispatch(showError());
    }

}


// ------------------- Basket -------------------------

export const addInBasket = (payload) => async (dispatch) => {

    const response = await basket_api.addBasket(payload);
   
    if (response) {
        // payload.id = response.name;
        dispatch(addInBasketAC(payload));
        dispatch(removeNode(payload.id));
        dispatch(enableBtnAC());
    } else {
        dispatch(showError());
    }
}


export const getBasket = () => async (dispatch) => {

    dispatch(showLoader());

    const response = await basket_api.fetchBasket();
    
        if (response) {
            const basket = Object.keys(response).map(key => {
                return {
                    ...response[key],
                    id: key
                }
            });

            dispatch(fetchBasket(basket));
            dispatch(hideLoader());
            // если response null - на сервере нет данных (корзина пуста)
            // если response false - ошибка
        } else if (response !== null) {
            dispatch(showError());
        } else if(response === null) {
            dispatch(hideLoader());
        }
}

export const removeBasket = (payload) => async (dispatch) => {

    const response = await basket_api.removeBasket(payload.id);

    if (response === null) {
        dispatch(removeBasketAC(payload.id));
        dispatch(addNode(payload));

        // dispatch(getNodes());
    } else {
        dispatch(showError());
    }
}

