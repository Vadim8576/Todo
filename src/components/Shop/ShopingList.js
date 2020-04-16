import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import css from './../css.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const ShopingList = ({ addInBasket, removeNode, checkedToggle, nodes, isError, ...props }) => {


    // const [nodeIsEmpty, setNodeEmpty] = useState(false);
    

    // if(nodes && nodes.length === 0) {
    //     setNodeEmpty(true);
    // } else {
    //     setNodeEmpty(false);
    // }
 
  
    return (
        <>
            <div className={css.shoppingList}>
                {props.loading 
                // && !nodeIsEmpty
                    ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    : !isError
                        ? <TransitionGroup component='ul' className='listGroup'>
                            {nodes.map(item =>
                                <CSSTransition
                                    key={item.id}
                                    classNames={'node'}
                                    timeout={800}>
                                    <ShoppingItem {...item} removeNode={removeNode} checkedToggle={checkedToggle} addInBasket={addInBasket} />
                                </CSSTransition>)}
                        </TransitionGroup>
                        : isError && <span>Ошибка загрузки данных с сервера!</span>}
                {/* {nodeIsEmpty && <div>Корзина пуста</div>} */}

            </div>
        </>
    )
}

export default ShopingList;