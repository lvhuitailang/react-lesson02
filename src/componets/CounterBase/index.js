import React, {Component,createContext} from 'react';


const {
    Provider,
    Consumer:CounterConsumer
} = createContext()

class CounterProvider extends Component {
    constructor() {
        super();
        this.state = {
            count:100,
        }
    }
    increseFun = (op)=>{
        this.setState({count:'increasement' === op ? this.state.count+1:this.state.count-1})
    }
    render() {
        return (
            <div>
                <Provider value={{...this.state,...{increseFun:this.increseFun}}}>
                    {this.props.children}
                </Provider>

            </div>
        );
    }
}




class CounterButton extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    (orgs)=>{
                        return(
                            <button onClick={()=>{orgs.increseFun(this.props.opType)}}>{this.props.children}</button>
                        )
                    }
                }
            </CounterConsumer>



        );
    }
}


class CounterText extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    (orgs)=>{
                        return(
                            <span>{orgs.count}</span>
                        )
                    }
                }
            </CounterConsumer>

        );
    }
}



class Counter extends Component {
    render() {
        return (
            <div>
                <CounterButton opType={'decreasement'}>-</CounterButton>
                <CounterText/>
                <CounterButton opType={'increasement'}>+</CounterButton>

            </div>
        );
    }
}


class CounterBase extends Component {
    render() {
        return (
            <CounterProvider>
                <Counter/>
            </CounterProvider>
        );
    }
}

export default CounterBase;
