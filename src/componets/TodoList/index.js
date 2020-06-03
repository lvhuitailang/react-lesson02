import React, {Component} from 'react';

import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.loading?'Loading...':''}
                <ul>
                    {
                        this.props.todos.map(item=>{
                            return (
                                <TodoItem key={item.id} changeComplete={this.props.changeComplete} loading={this.props.loading} {...item} />
                            )
                        })
                    }

                </ul>
            </div>

        );
    }
}

export default TodoList;