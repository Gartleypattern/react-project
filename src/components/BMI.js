import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChangeToGram extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weight:0
        }
        this.toGram = this.toGram.bind(this);
    }


    toGram(event) {
        this.setState({
            weight:(event.target.value)*1000
        });
    }


    render() {
        return (

            <div className='container'>
                <div className='row mt-3 '>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4 shadow  bg-white rounded'>
                        <input
                            type='text'
                            value={this.props.searchString}
                            onChange={this.toGram}
                            ref="searchStringInput"
                        />
                        <p>{this.state.weight} gram</p>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
        );
    }
}

export default ChangeToGram;