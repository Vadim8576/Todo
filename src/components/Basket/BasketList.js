import React, { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import css from './../css.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const BasketList = ({ addInBasket, basket, isError, removeBasket, ...props }) => {
    // console.log(props.nodes);
    
    const [basketIsEmpty, setBasketEmpty] = useState(false);
    

    useEffect(() => {
        if(basket.length === 0) {
            setBasketEmpty(true);
         } else {
            setBasketEmpty(false)
        }
    }, [basket.length]);
    
    return (
        <>
            <div className={css.shoppingList}>
                {!isError && props.loading
                    ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    : !isError
                        ? <TransitionGroup component='ul' className='listGroup'>
                            {basket.map(item =>
                                <CSSTransition
                                    key={item.id}
                                    classNames={'node'}
                                    timeout={500}>
                                    <BasketItem {...item} addInBasket={addInBasket} removeBasket={removeBasket} />
                                </CSSTransition>)}
                        </TransitionGroup>
                        : <span>Ошибка загрузки данных с сервера!</span>}
                    {basketIsEmpty && <div className={css.noItem}>Корзина пуста</div>}
            </div>
        </>
    )
}

export default BasketList;