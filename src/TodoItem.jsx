import React, {useContext, useEffect} from 'react';
import {Context} from './context';
import {api} from './api/api';



const TodoItem = ({date, title, id, completed}) => {
    
    // const {checkedToggle, removeNode} = useContext(Context);
    
    const cls = ['todo'];

    if(completed) {
        cls.push('completed');
    }
    

    return (
       <li className={cls.join(' ')}>
           <label>
               <input
                    type='checkbox'
                    checked={completed}
                    // onChange={(e) => checkedToggle(id)}
                />
                <span><b>{title}</b> <small>{date}</small></span>
               <i className="material-icons red-text"
                    onClick={() => {
                        // removeNode(id);
                        // console.log(id);
                }}
                >
                    delete
                </i>
           </label>
       </li>
    );
}

export default TodoItem;


