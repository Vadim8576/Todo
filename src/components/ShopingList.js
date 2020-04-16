import React from 'react';
import TodoList from './TodoList';
import css from './css.module.css';



const ShopingList = ({ removeNode, checkedToggle, ...props }) => {
    // console.log(props.nodes);
    return (
        <div className="container scroll">
            <div className={css.shoppingList}>
                {props.loading
                    ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    : <TodoList
                        nodes={props.nodes}
                        removeNode={removeNode}
                        checkedToggle={checkedToggle}
                    />
                }
                {props.isError && <span>Ошибка загрузки данных с сервера!</span>}
            </div>
        </div>
    )
}

export default ShopingList;