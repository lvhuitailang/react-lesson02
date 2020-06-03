import React, {Component} from 'react';

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './componets'
/*

import * as service from './service'
React.Component.prototype.http = service

*/
import {getTodos} from './service'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoHeaderText:'待办事项列表',
            todoHeaderDesc:'今日事，今日毕',
            btnText:'add',
            loading:true,
            todos:[

            ],
            addTodo:(title)=>{
                let randomId = +new Date()+Math.random();
                this.setState(()=>{
                    return {
                        todos:this.state.todos.concat({id:randomId,title:title,completed: false})
                    }
                })
            },
            changeComplete:(id)=>{
                this.setState((preState)=>{
                    preState.todos.some(item=>{
                        if(item.id == id){
                            item.completed = !item.completed;
                            return true;
                        }
                    });
                    return {
                        todos:preState.todos
                    }
                })

            }
        }
    }

    getData(){
        getTodos().then(res=>{
            this.setState({loading:true});
            if(res.status === 200){
                this.setState(()=>{
                    return {
                        todos:res.data
                    }
                },()=>{
                    this.setState({loading:false});
                })

            }
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            this.setState({loading:false});
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <TodoHeader title={this.state.todoHeaderText}>
                    <i>{this.state.todoHeaderDesc}</i>
                </TodoHeader>
                <TodoInput btnText={this.state.btnText} addTodo={this.state.addTodo}/>
                <TodoList  changeComplete={this.state.changeComplete} todos={this.state.todos} loading={this.state.loading}/>
                <Like />
            </div>
        );
    }
}

export default App;