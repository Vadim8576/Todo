import React, {useContext, useEffect} from 'react';
import {Context} from './context';
import {checkedToggle} from './reducer';


const TodoItem = ({title, id, completed}) => {
    
    const {dispatch} = useContext(Context);

    // console.log(title, id, completed);
    
    const cls = ['todo'];

    if(completed) {
        cls.push('completed');
    }
    
    // useEffect(() => {
    //     let inp = document.querySelector('input[type=checkbox]');
    //     console.log(inp.checked);
    // }, []);


    return (
       <li className={cls.join(' ')}>
           <label>
               <input
                    type='checkbox'
                    checked={completed}
                    onChange={(e) => dispatch(checkedToggle(id))}
                />
               <span>{title}</span>
               <i className="material-icons red-text"
                    onClick={() => dispatch({
                        type: 'REMOVE',
                        payload: id
                    })}
                >
                    delete
                </i>
           </label>
       </li>
    );
}

export default TodoItem;


