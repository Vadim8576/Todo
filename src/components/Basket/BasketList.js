import React, { useState } from 'react';
import BasketItem from './BasketItem';
import css from './../css.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const BasketList = ({ addInBasket, basket, isError, removeBasket, ...props }) => {
    // console.log(props.nodes);
    
    const [basketIsEmpty, setBasketEmpty] = useState(false);
    

    if(basket && basket.length === 0) {
        setBasketEmpty(true);
    } 
    
    return (
        <>
            <div className={css.shoppingList}>
                {props.loading && !basketIsEmpty
                    ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    : !isError
                        ? <TransitionGroup component='ul' className='listGroup'>
                            {basket.map(item =>
                                <CSSTransition
                                    key={item.id}
                                    classNames={'node'}
                                    timeout={800}>
                                    <BasketItem {...item} addInBasket={addInBasket} removeBasket={removeBasket} />
                                </CSSTransition>)}
                        </TransitionGroup>
                        : <span>Ошибка загрузки данных с сервера!</span>}
                    {basketIsEmpty && <div>Корзина пуста</div>}
            </div>
        </>
    )
}

export default BasketList;