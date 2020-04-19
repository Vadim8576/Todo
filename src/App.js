import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { enableBtn, disableBtn, removeBasket, getData, getBasket, addInBasket, showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes, showError, removeSelected } from './redux/nodesReducer';
import { connect } from 'react-redux';
import ShopingList from './components/Shop/ShopingList';
import BasketList from './components/Basket/BasketList';
import FooterBar from './components/FooterBar';
import HeaderContainer from './components/Header/HeaderContainer';
import { Route, Redirect } from 'react-router-dom';

import { ReactReduxContext } from 'react-redux';


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


const App = ({ enableBtn, disableBtn, removeBasket, getData, addInBasket, getBasket, getNodes, addNode, removeNode, checkedToggle, removeSelected, ...props }) => {
  // debugger;
  
  // console.log(store);

  useEffect(() => {
    getData();
    
  }, [])

  const len = {nodes: props.nodes.length, basket: props.basket.length};

  return (
    <>
      <HeaderContainer addNode={addNode} len={len} />

      <ReactReduxContext.Consumer>

      {({ store }) => {
        console.log(store.getState());
      }}

      </ReactReduxContext.Consumer>



      <div className="container scroll">

        <Route exact path='/' render={() => <Redirect to={'/list'} />} />

        <Route path='/list' render={() =>
          <ShopingList
            nodes={props.nodes}
            removeNode={removeNode}
            checkedToggle={checkedToggle}
            loading={props.loading}
            addInBasket={addInBasket}
            isError={props.isError}
            nodeIsEmpty={props.nodeIsEmpty}
            enableBtn={enableBtn}
            disableBtn={disableBtn}
            btnIsEnabled={props.btnIsEnabled}
          />} />

        <Route path='/basket' render={() =>
          <BasketList
            basket={props.basket}
            // removeNode={removeNode}
            // checkedToggle={checkedToggle}
            addInBasket={addInBasket}
            loading={props.loading}
            removeBasket={removeBasket}
            isError={props.isError}
            basketIsEmpty={props.basketIsEmpty}
            enableBTN={enableBtn}
            disableBTN={disableBtn}
          />} />

        <div className='todiListFooterSpace'></div>

      </div>

      <FooterBar removeSelected={removeSelected} nodes={props.nodes} />



    </>
  );
}


const mapStateToProps = (state) => (
  {
    nodes: state.nodes.nodes,
    basket: state.nodes.basket,
    loading: state.nodes.loading,
    isError: state.nodes.isError,
    btnIsEnabled: state.nodes.btnIsEnabled,
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
    removeSelected,
    addInBasket,
    getBasket,
    getData,
    removeBasket,
    enableBtn,
    disableBtn, 
  })(App);


export default AppContainer;


