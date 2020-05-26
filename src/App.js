import React, {Component} from 'react';

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './componets'


class App extends Component {
    constructor() {
        super();
        this.state = {
            todoHeaderText:'待办事项列表',
            todoHeaderDesc:'今日事，今日毕',
            btnText:'add',
            todos:[
                {
                    id: 1,
                    title: '吃饭',
                    completed: true
                },
                {
                    id: 2,
                    title: '睡觉',
                    completed: false
                },
                {
                    id: 3,
                    title: '游戏',
                    completed: false
                }
            ],
            addTodo:(title)=>{
                let randomId = +new Date()+Math.random();
                this.setState(()=>{
                    return {
                        todos:this.state.todos.concat({id:randomId,title:title,completed: false})
                    }
                })



            }
        }
    }

    render() {
        return (
            <div>
                <TodoHeader title={this.state.todoHeaderText}>
                    <i>{this.state.todoHeaderDesc}</i>
                </TodoHeader>
                <TodoInput btnText={this.state.btnText} addTodo={this.state.addTodo}/>
                <TodoList todos={this.state.todos}/>
                <Like />
            </div>
        );
    }
}

export default App;