import React, {useState} from 'react';


const TodoItem = ({title, id, completed}) => {
    const [checked, setChecked] = useState(completed);

    const cls = ['todo'];

    if(checked) {
        cls.push('completed');
    }

    return (
       <li className={cls.join(' ')}>
           <label>
               <input
                    id="indeterminate-checkbox"
                    type='checkbox'
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
               <span>{title}</span>
               <i className='material-icons red-text'>
                   delete
               </i>
           </label>
       </li>
    );
}

export default TodoItem;