
// https://www.youtube.com/watch?v=V1rhxheJg4A


import React, { useState, useEffect, useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Context} from './context';
import reducer from './reducer';
import {showLoader, addNote, removeNote, fetchNotes, checkedToggle, showLoaderAC} from './reducer'
import { Loader } from './components/Loader';
import axios from 'axios';



function App() {
  
  
  const ls = JSON.parse(localStorage.getItem('todos')) || []; // [] - начальное состояние state
  const [state, dispatch] = useReducer(reducer, {notes: [], loading: false});

  // const ls = JSON.parse(localStorage.getItem('todos')) || []; // [] - начальное состояние state
  // const [state, dispatch] = useReducer(reducer, ls);



  const [todoTitle, setTodoTitle] = useState('');


  


  useEffect(() => {
    dispatch(showLoaderAC());
    fetchNotes();
    // eslint-disable-next-line
  }, [])
  




  // const handleClick = () => {
  //   console.log('click');
  // }


  /*

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    console.log('state поменялся');
    localStorage.setItem('todos', JSON.stringify(state));

    // если вешаем слушателя, обязательно его удаляем, чтобы не было "утечки памяти"
    // return () => {
    //   document.removeEventListener('click', handleClick);
    // }
  }, [state]);
*/

  const addTodo = (e) => {
    if(e.key === 'Enter') {
      if(todoTitle !== '') {
        addNote(todoTitle);

       setTodoTitle('');
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
    // оборачиваем для передачи Context
    <Context.Provider value={{
      dispatch, checkedToggle, state
    }}>
      
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
        {state.loading && <Loader />
        || <TodoList notes={state.notes} />
        }
      </div>
      
      

    </Context.Provider>
    
  );
}

export default App;
