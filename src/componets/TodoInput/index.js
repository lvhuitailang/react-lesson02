import React, {Component,createRef} from 'react';

import propTypes from 'prop-types'

class TodoInput extends Component {
    constructor() {
        super();
        this.state={
            inputValue:''
        }
        this.inputDom = createRef();
    }
    static propTypes = {
        btnText:propTypes.string

    }
    static defaultProps = {
        btnText:'添加'
    }

    changeInputValue = (e)=>{
        let v = e.currentTarget.value;
        this.setState(()=>{
            return {
                inputValue:v
            }
        });
    }
    handleAddBtn = (e)=>{
        if(e.keyCode && e.keyCode!==13){
            return false;
        }
        let thisValue = this.state.inputValue.trim();
        if(thisValue == ''){
            this.inputDom.current.focus();
            return false;
        }
        this.props.addTodo(thisValue)
        this.setState(()=>{
            return{
                inputValue:''
            }
        },()=>{
            this.inputDom.current.focus();
        })
    }

    render() {
        return (
            <div>
                <input type={'text'}
                       value={this.state.inputValue}
                       onChange={this.changeInputValue}
                       onKeyUp={this.handleAddBtn}
                       ref={this.inputDom}
                />
                <button type={'button'} onClick={this.handleAddBtn}>{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput;