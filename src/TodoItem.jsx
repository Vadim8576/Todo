import React, {useContext} from 'react';
import {Context} from './context';


const TodoItem = ({title, id, completed}) => {
    const {toggleTodo, removeTodo} = useContext(Context);

    const cls = ['todo'];

    if(completed) {
        cls.push('completed');
    }

    return (
       <li className={cls.join(' ')}>
           <label>
               <input
                    id="indeterminate-checkbox"
                    type='checkbox'
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                />
               <span>{title}</span>
               <button onClick={() => removeTodo(id)}>
                   delete
               </button>
           </label>
       </li>
    );
}

export default TodoItem;