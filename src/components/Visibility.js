import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Visibility extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status:false
        }
    }

    toggle = () => {
        this.setState((state) => {
            return {
                status: !state.status
            };
        });
    };


    render() {
        return (
            <div className='container text-center mt-4'>
                <h1 className='mb-3'>visibility toggle</h1>
                <button
                    onClick={this.toggle}
                    className={!this.state.status ? 'btn btn-primary' : 'btn btn-warning'}
                >
                    {this.state.status?'Hide messege':'Show Messege'}
                </button>
                <p className='pt-4 text-success'>
                    {this.state.status && 'This is an importnat messege'}
                </p>
            </div>
        );
    };
};

export default Visibility;