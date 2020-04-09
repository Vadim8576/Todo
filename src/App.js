import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Context} from './context';


// test
function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');


  const handleClick = () => {
    console.log('click');
  }

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    
    if(raw.length > 0) {
      setTodos(JSON.parse(raw));
    }
    
    
  }, []);

  useEffect(() => {

    document.addEventListener('click', handleClick);

    localStorage.setItem('todos', JSON.stringify(todos));

    // если вешаем слушателя, обязательно его удаляем, чтобы не было "утечки памяти"
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [todos]);

  const addTodo = (e) => {
    if(e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle('');
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !==id
    }))
  }

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  return (
    // оборачиваем для передачи C
    <Context.Provider value={{
      toggleTodo, removeTodo
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
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
    
  );
}

export default App;
