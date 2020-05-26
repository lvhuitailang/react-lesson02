import React, {Component} from 'react';

import TodoItem from './TodoItem'

class TodoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todos.map(item=>{
                    return (
                        <TodoItem key={item.id} {...item}/>
                    )
                    })
                }

            </ul>
        );
    }
}

export default TodoList;