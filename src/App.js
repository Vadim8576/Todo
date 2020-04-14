import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes, showError } from './redux/nodesReducer';
import { connect } from 'react-redux';
import ShopingList from './components/ShopingList';
import ShoppingBasket from './components/ShoppingBasket';


import GoogleLogin from 'react-google-login';


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



const responseGoogle = (response) => {
  console.log(response);
}



const App = ({ getNodes, addNode, removeNode, checkedToggle, ...props }) => {

  // const [loading, isLoading] = useReducer(reducer, {loading: false});

  const [todoTitle, setTodoTitle] = useState('');
  // const [error, isError] = useState(false);


  useEffect(() => {
    getNodes();
    // eslint-disable-next-line
  }, [])


  const addTodo = (e) => {
    if (e.key === 'Enter') {

      if (todoTitle !== '') {
        const payload = {
          title: todoTitle,
          date: setDate()
        }

        addNode(payload);
        setTodoTitle('');

      }
    }
  }

  // const toggleTodo = id => {
  //   setTodos(todos.map(todo => {
  //     if(todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   }))
  // }

  return (

    <div className="container">

      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      
      <h3>ПОКУПКИ</h3>


      <div className='input-field'>
        <input
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
          type='text'
        />
        <label>Введите товар </label>
        {/* <i className="material-icons">add</i> */}
      </div>

      <ShopingList
        nodes={props.nodes}
        removeNode={removeNode}
        checkedToggle={checkedToggle}
        loading={props.loading}
      />

      <ShoppingBasket
        nodes={props.nodes}
        removeNode={removeNode}
        checkedToggle={checkedToggle}
        loading={props.loading}
      />

    </div>
  );
}


const mapStateToProps = (state) => (
  {
    loading: state.nodes.loading,
    nodes: state.nodes.nodes,
    isError: state.nodes.isError
  }
)


const AppContainer = connect(mapStateToProps,
  {
    getNodes,
    showLoader,
    hideLoader,
    checkedToggle,
    addNode,
    removeNode,
    showError
  })(App);


export default AppContainer;


