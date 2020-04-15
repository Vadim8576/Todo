import React, { useState, useEffect } from 'react';



const TodoItem = ({ date, title, id, removeNode, checkedToggle, ...props }) => {


    useEffect(() => {
        setSelect();

    }, [])


    const cls = ['todo'];

    if (complited) {
        cls.push('completed');
    }

 
    return (

        <li className={cls.join(' ')}>
            <label>
                <input
                    type='checkbox'
                    checked={complited}
                    onChange={(e) => checkedToggle(id)}
                />

                <span><b>{title}</b> <small>{date}</small></span>

                
                {/* <a class="waves-effect waves-light btn-small">
                    <i class="material-icons left">cloud</i>
                    button
                </a> */}
                <div className="waves-effect waves-light btn-flat deep-orange"
                    onClick={(e) => {
                        e.preventDefault();
                        removeNode(id)
                    }}
                >
                    <i className="material-icons center white-text">
                        shopping_cart
                    </i>
                </div>
            </label>
        </li>
    );
}

export default TodoItem;


