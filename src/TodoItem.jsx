import React, {useContext} from 'react';
import {Context} from './context';


const TodoItem = ({title, id, completed}) => {
    const {dispatch} = useContext(Context);

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
                    onChange={() => dispatch({
                        type: 'TOGGLE',
                        payload: id
                    })}
                />
               <span>{title}</span>
               <button onClick={() => dispatch({
                        type: 'REMOVE',
                        payload: id
                    })}>
                   delete
               </button>
           </label>
       </li>
    );
}

export default TodoItem;