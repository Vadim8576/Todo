import React from 'react';
import TodoList from '../TodoList';
import css from './css.module.css';

const ShoppingBasket = ({ removeNode, checkedToggle, ...props }) => {
  return (


    <div className={css.shoppingBasket}>
      <div className={css.shoppingBasketHeader}>
        <i className="material-icons center">shopping_cart</i>
          &emsp;
          <span>КОРЗИНА</span>
      </div>

      {/* {props.loading
          ? <div className="progress">
            <div className="indeterminate"></div>
          </div>
          : <TodoList
            nodes={props.nodes}
            removeNode={removeNode}
            checkedToggle={checkedToggle}

          />
        }
        {props.isError && <span>Ошибка загрузки данных с сервера!</span>} */}
    </div>
  )

}

export default ShoppingBasket;