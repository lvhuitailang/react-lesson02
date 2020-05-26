import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state={
            like:false
        }
    }
    handleLike = ()=>{
        this.setState((preState,props)=>{
            return{
                like:!preState.like
            }
        },()=>{

        })
    }
    render() {
        return (
            <span onClick={this.handleLike}>
                {this.state.like?'取消👍':'喜欢👍🏿'}
            </span>
        );
    }
}

export default Like;