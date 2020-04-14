import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({nodes, removeNode, checkedToggle}) => {

    // console.log(removeNode);
    return (
        <ul>
            {nodes.map(item => <TodoItem
                key={item.id}
                {...item}
                removeNode={removeNode}
                checkedToggle={checkedToggle}
                />)}
        </ul>
    );
}

export default TodoList;