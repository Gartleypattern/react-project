import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChangeToGram extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            kilogram: 0,
            gram:0
        }
    }

    handleClick = () => {
        this.setState(() => ({kilogram:''}));
    }

    convertor = (event) => {
        this.setState(() => ({
                kilogram: event.target.value,
                gram:event.target.value*1000
        }));
    }

    render() {
        return (
            <div
                className='bg-primary text-white rounded container text-center shadow mt-4'
                style={{ width: '500px', height: '300px' }}
            >
                <h3 className='pt-4'>Kilogram to gram convertor</h3>
                <div className='mx-5'>
                    <div className='form-group row mt-5'>
                            <label for="kilogram" class="col-sm-2 col-form-label">Kilogram</label>
                            <div className='col-sm-10'>
                                <input
                                    className='form-control'
                                    style={{ width: '250px' }}
                                    onChange={this.convertor}
                                    onClick={this.handleClick}
                                    type="text"
                                    name='kilogram'
                                    id='kilogram'
                                    value={this.state.kilogram}
                                />
                            </div>
                        </div>
                        <div className='form-group row mt-5'>
                            <label for="kilogram" class="col-sm-2 col-form-label">gram</label>
                            <div className='col-sm-10'>
                                <input
                                className='form-control'
                                style={{ width: '250px' }}
                                value={this.state.gram}
                                type="text"
                                name='gram'
                                disabled
                                />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ChangeToGram;