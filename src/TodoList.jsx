import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({notes}) => {

    // console.log(todos);
    return (
        <ul>
            {notes.map(item => <TodoItem key={item.id} {...item}  />)}
        </ul>
    );
}

export default TodoList;