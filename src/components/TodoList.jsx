import React from 'react';
import TodoItem from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const TodoList = ({ nodes, removeNode, checkedToggle }) => {

    // console.log(nodes);
    return (
        <TransitionGroup component='ul' className='listGroup'>
            {nodes.map(item =>
            <CSSTransition
                key={item.id}
                classNames={'node'}
                timeout={800}>
                <TodoItem {...item} removeNode={removeNode} checkedToggle={checkedToggle} />
            </CSSTransition>)}
        </TransitionGroup>

    );
}

export default TodoList;