import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({todos}) => {
    // console.log(typeof(todos));
    return (
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item} />)}
        </ul>
    );
}

export default TodoList;