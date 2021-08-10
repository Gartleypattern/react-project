import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Exchange extends React.Component{
    constructor(props){
        super(props);
        this.currencies = ['EUR','USD','GBP','JPY','NZD','AUD','CHF'];
        this.cashed = {}
        this.state = {
            base: 'EUR',
            other: 'USD',
            value: '',
            converted:''
        }
    }

    makeSelection = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        },this.recalculate);
    }

    changeValue = (event)=>{
        this.setState({
            value: event.target.value,
            converted:null
        },this.recalculate);
    }

    recalculate = () => {
        const value = parseFloat(this.state.value);
        if (isNaN(value)) {
            return;
        }

        if (this.cashed[this.state.base] !== undefined && Date.now() - this.cashed[this.state.base].timestamp < 1000*60) {
            this.setState({
                converted:this.cashed[this.state.base].rates[this.state.other] * value
            });
            return;
        }
            
            
        fetch(`https://api.exchangerate.host/latest?base=${this.state.base}`)
            .then(Response => Response.json())
            .then(data => {
                this.cashed[this.state.base] = {
                    rates: data.rates,
                    timestamp:Date.now()
                }
                this.setState({
                    converted:data.rates[this.state.other] * value
                })
            });
    }
    
    render() {
        return (
            <form className='mt-5 m-auto shadow text-center px-3 py-5 bg-light' style={{width:'40%'}}>
                <h4 className='mb-3'><strong>Exchange currencies</strong></h4>
                    <div className='input-group'>
                        <div className="col-2">
                            <select
                                name='base'
                                value={this.state.base}
                                onChange={this.makeSelection}
                                className='form-select bg-info text-white'
                            >
                                {this.currencies.map(currency => 
                                    <option
                                        key={currency}
                                        value={currency}
                                    >{currency}</option>
                                )}
                            </select>
                        </div>
                        <div className='col-10'>
                            <input
                                value={this.state.value}
                                onChange={this.changeValue}
                                className='form-control'
                            />
                        </div>
                        </div>
                        <div className='input-group mt-2'>
                            <div className="col-2">
                                    <select
                                        name='other'
                                        value={this.state.other}
                                        onChange={this.makeSelection}
                                        className='form-select bg-info text-white'
                                    >
                                        {this.currencies.map(currency =>
                                            <option key={currency} value={currency}>{currency}</option>
                                            )}
                                    </select>
                            </div>
                            <div className="col-10">
                                <input
                                    value={this.state.converted === null
                                        ? 'calculating...'
                                        : this.state.converted}
                                    disabled
                                    className='form-control'
                                />
                            </div>
                    </div>
            </form>
        )
    }
}

export default Exchange;






