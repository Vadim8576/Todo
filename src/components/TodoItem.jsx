import React from 'react';



const TodoItem = ({ date, title, id, removeNode, checkedToggle, selected, ...props }) => {

// debugger;
    const cls = ['todo'];

    if (selected) {
        cls.push('selected');
    }

 
    return (

        <li className={cls.join(' ')}>
            <label>
                <input
                    type='checkbox'
                    checked={selected}
                    onChange={(e) => checkedToggle(id)}
                />

                <span><b>{title}</b> <small>{date}</small></span>

                
                {/* <a class="waves-effect waves-light btn-small">
                    <i class="material-icons left">cloud</i>
                    button
                </a> */}
                <div className="waves-effect waves-light btn-flat deep-orange my-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        removeNode(id);
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


