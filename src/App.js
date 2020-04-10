import React, { useState, useEffect, useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Context} from './context';
import reducer from './reducer';


// test
function App() {

  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || []); // [] - начальное состояние state

  const [todoTitle, setTodoTitle] = useState('');


  // const handleClick = () => {
  //   console.log('click');
  // }


  

  useEffect(() => {
    // document.addEventListener('click', handleClick);
    console.log('state поменялся');
    localStorage.setItem('todos', JSON.stringify(state));

    // если вешаем слушателя, обязательно его удаляем, чтобы не было "утечки памяти"
    // return () => {
    //   document.removeEventListener('click', handleClick);
    // }
  }, [state]);


  const addTodo = (e) => {
    if(e.key === 'Enter') {
      dispatch({
        type: 'ADD',
        payload: todoTitle
      });

      setTodoTitle('');
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
      dispatch, state
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
        <TodoList todos={state} />
      </div>
    </Context.Provider>
    
  );
}

export default App;
