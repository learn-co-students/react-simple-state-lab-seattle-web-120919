import React, {Component} from 'react';

class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    click = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        console.log(this.props)
        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.click}>
            </div>
        )
    }
}

export default Cell;