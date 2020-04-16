import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes, showError, removeSelected } from './redux/nodesReducer';
import { connect } from 'react-redux';
import ShopingList from './components/ShopingList';
import ShoppingBasket from './components/ShoppingBasket';
import FooterBar from './components/FooterBar';
import HeaderContainer from './components/HeaderContainer';
import { Route, Redirect } from 'react-router-dom';


// const setDate = () => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timezone: 'UTC'
//   };
//   return new Date().toLocaleString("ru", options);
// }


const App = ({ getNodes, addNode, removeNode, checkedToggle, removeSelected, ...props }) => {
  // debugger;

  // const [todoTitle, setTodoTitle] = useState('');


  useEffect(() => {
    getNodes();
  }, [])


  // const addTodo = (e) => {
  //   if (e.key === 'Enter') {

  //     if (todoTitle !== '') {
  //       const payload = {
  //         title: todoTitle,
  //         date: setDate(),
  //         selected: false
  //       }

  //       addNode(payload);
  //       setTodoTitle('');

  //     }
  //   }
  // }


  return (
    <>
      <HeaderContainer addNode={addNode} />

      {/* exact означает, что URL должен совпадать точь-в-точь */}
      <Route exact path='/' render={() => <Redirect to={'/list'} />} />

      <Route path='/list' render={() =>
        <ShopingList
          nodes={props.nodes}
          removeNode={removeNode}
          checkedToggle={checkedToggle}
          loading={props.loading}
        />} />

      <Route path='/basket' render={() =>
        <ShoppingBasket
          nodes={props.nodes}
          removeNode={removeNode}
          checkedToggle={checkedToggle}
          loading={props.loading}
        />} />

      <div className='todiListFooterSpace'></div>

      <FooterBar removeSelected={removeSelected} nodes={props.nodes} />
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
    showError,
    removeSelected
  })(App);


export default AppContainer;


