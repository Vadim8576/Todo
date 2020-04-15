import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes, showError } from './redux/nodesReducer';
import { connect } from 'react-redux';
import ShopingList from './components/ShopingList';
import ShoppingBasket from './components/ShoppingBasket';


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


const App = ({ getNodes, addNode, removeNode, checkedToggle, ...props }) => {
  console.log(props.nodes);

  const [todoTitle, setTodoTitle] = useState('');


  useEffect(() => {
    getNodes();
    // eslint-disable-next-line
  }, [])


  const addTodo = (e) => {
    if (e.key === 'Enter') {

      if (todoTitle !== '') {
        const payload = {
          title: todoTitle,
          date: setDate(),
          completed: false
        }

        addNode(payload);
        setTodoTitle('');

      }
    }
  }


  return (
    <>
    <div className='fixed'>
      <div className='container'>
        <h5 className='fixed-h'>ПОКУПКИ</h5>

        <div className='input-field'>
          <input
          className='white-text'
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
            type='text'
          />
          <label>Введите товар </label>
          {/* <i className="material-icons">add</i> */}
        </div>
        </div>
      </div>

    <div className="container scroll">
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
    </> 
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


