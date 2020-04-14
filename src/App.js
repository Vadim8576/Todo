
// https://www.youtube.com/watch?v=V1rhxheJg4A


import React, { useState, useEffect, useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Context} from './context';
import reducer from './redux/nodesReducer';
import {showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes} from './redux/nodesReducer'
import { Loader } from './components/Loader';
import { connect } from 'react-redux';


const setDate = () => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timezone: 'UTC'
  }; 
  return new Date().toLocaleString("ru", options);
}




const App = ({getNodes, addNode, removeNode, loading, nodes}) => {

  // console.log(store);

  
  // const [loading, isLoading] = useReducer(reducer, {loading: false});

  const [todoTitle, setTodoTitle] = useState('');
  const [error, isError] = useState(false);



  useEffect(() => {
    // alert();
    getNodes();
    // dispatch(showLoader());
    // api.fetchNotes()
    //   .then((response) => {
    //     console.log(response);

    //     if(response) {
    //       const nodes = Object.keys(response).map(key => {
    //         return {
    //           ...response[key],
    //           id: key 
    //         }
    //       });
    //       console.log(nodes);
    //       dispatch(fetchNotes(nodes));
    //       dispatch(hideLoader());
    //     } else {
    //       isError(true);
    //     }
        
    //   });
    // eslint-disable-next-line
  }, [])
  


  const addTodo = (e) => {
    if(e.key === 'Enter') {

      if(todoTitle !== '') {
        const payload = {
          title: todoTitle,
          date: setDate()
        }

        addNode(payload);
      } 
    }
  }

  // const removeTodo = (id) => {
  //   setTodos(todos.filter(todo => {
  //     return todo.id !==id
  //   }))
  // }

  // const toggleTodo = id => {
  //   setTodos(todos.map(todo => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   }))
  // }

  return (

      // <Context value={{
      //   checkedToggle, removeNode
      // }}>     
        <div className="container">
        <h1>Todo list</h1>
        <div className='input-field'>
          <input
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
            type='text'
          />
          <label>Todo name</label>
        </div>
        
          
          {loading
            && <Loader />
            || <TodoList nodes={nodes} removeNode={removeNode} />
          }
          {/* {error && <span>Ошибка загрузки данных с сервера!</span>} */}
        
        
      </div>
    // </Context>
  );
}


const mapStateToProps = (state) => (
  {
    loading: state.nodes.loading,
    nodes: state.nodes.nodes
  }
)

const AppContainer = connect(mapStateToProps,
  {
    getNodes,
    showLoader,
    hideLoader,
    checkedToggle,
    addNode,
    removeNode
  })(App);

export default AppContainer;


