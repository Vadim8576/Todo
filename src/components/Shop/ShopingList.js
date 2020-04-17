import React, { useState, useEffect } from 'react';
import ShoppingItem from './ShoppingItem';
import css from './../css.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Toast from '../Toast/Toast';




const ShopingList = ({ addInBasket, removeNode, checkedToggle, nodes, isError, ...props }) => {


    const [nodeIsEmpty, setNodeEmpty] = useState(false);
    
    useEffect(() => {
        if(nodes.length === 0) {
            setNodeEmpty(true);
         } else {
             setNodeEmpty(false)
        }
    }, [nodes.length]);
    



    
    return (
        <>
            {/* <Toast text={'Товар добавлен в список!'} /> */}
            
            <div className={css.shoppingList}>
                {!isError && props.loading 
                    ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    : !isError
                        ? <TransitionGroup component='ul' className='listGroup'>
                            {nodes.map(item =>
                                <CSSTransition
                                    key={item.id}
                                    classNames={'node'}
                                    timeout={500}>
                                    <ShoppingItem {...item} removeNode={removeNode} checkedToggle={checkedToggle} addInBasket={addInBasket} />
                                </CSSTransition>)}
                        </TransitionGroup>
                        : isError && <span>Ошибка загрузки данных с сервера!</span>}
                {nodeIsEmpty && <div className={css.noItem}>Список покупок пуст</div>}

            </div>
        </>
    )
}

export default ShopingList;