import React from 'react';




const TodoItem = ({ date, title, id, selected, removeNode, checkedToggle }) => {

    const cls = ['todo'];

    if (selected) {
        cls.push('completed');
    }


    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type='checkbox'
                // checked={selected}
                // onChange={(e) => checkedToggle(id)}
                />

                <span><b>{title}</b> <small>{date}</small></span>

               
                <div className="waves-effect waves-light btn red"
                    onClick={(e) => {
                        e.preventDefault();
                        removeNode(id)
                    }}
                >
                    <i className="material-icons center">shopping_cart</i>
                </div>
            </label>
        </li>
    );
}

export default TodoItem;


