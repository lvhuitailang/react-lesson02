import React from "react";
const noop = ()=>{};
class TodoItem extends React.Component{
    constructor() {
        super();
        this.state = {
            completedText:'未完成'
        }
    }
    handleCheck = (e)=>{
        let {
            changeComplete = noop,
            id
        } = this.props;
        changeComplete(id);
    }

    static getDerivedFromProps(nextProps){
        return{
            completedText:nextProps.completed?'已完成':'未完成'
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
    /*    console.log(this.props)
        console.log(nextProps)*/
        return (this.props.completed !== nextProps.completed) || (this.props.title !== nextProps.title);
    }

    render() {
        console.log(`${this.props.title}  rendered`)
        let {
            completed,
            title
        } = this.props;

        return(
            <div>
                <li>
                    <input
                        type={'checkbox'}
                        checked={completed}
                        onChange={this.handleCheck}
                    />
                    {title} <span>{this.state.completedText}</span>
                </li>
            </div>

        )
    }


}
export default TodoItem;