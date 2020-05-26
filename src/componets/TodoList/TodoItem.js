import React from "react";

class TodoItem extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
            <li>
                {this.props.title} <span>{this.props.completed?'已完成':'未完成'}</span>
            </li>
        )
    }


}
export default TodoItem;