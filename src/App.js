import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { enableBtn, disableBtn, removeBasket, getData, getBasket, addInBasket, showLoader, hideLoader, checkedToggle, addNode, removeNode, getNodes, showError, removeSelected } from './redux/nodesReducer';
import { connect } from 'react-redux';
import ShopingList from './components/Shop/ShopingList';
import BasketList from './components/Basket/BasketList';
import FooterBar from './components/FooterBar';
import Header from './components/Header/Header';
import { Route, Redirect, Switch } from 'react-router-dom';
import { compose } from 'redux';


const App = ({ getData, ...props }) => {

  useEffect(() => {
    getData();

  }, [])

  const len = {
    nodes: props.nodes.length,
    basket: props.basket.length
  };

  return (
    <>
      <Header len={len} {...props} />

      <div className="container scroll">
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/list'} />} />
          <Route exact path='/list' render={() => <ShopingList {...props} />} />
          <Route exact path='/basket' render={() => <BasketList {...props} />} />
          <Route path='/*' render={() => <Redirect to={'/list'} /> } />
        </Switch>
        <div className='todiListFooterSpace'></div>
      </div>

      <FooterBar removeSelected={props.removeSelected} nodes={props.nodes} />
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


const AppContainer = compose(

  connect(mapStateToProps,
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
    }))(App);



export default AppContainer;


