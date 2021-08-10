import React from 'react';

class Hello extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            num:1
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    render() {
        return (
            <div>
                <h2>{this.state.num} </h2>
                <button onClick={this.handleEvent}>Click Here</button>
            </div>
        );
    }

    handleEvent() {
        this.setState({
            num:this.state.num+1
        });
    }
}

export default Hello;

