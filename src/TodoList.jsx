import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({nodes, removeNode}) => {

    console.log(nodes);
    return (
        <ul>
            {nodes.map(item => <TodoItem key={item.id} {...item}  />)}
        </ul>
    );
}

export default TodoList;