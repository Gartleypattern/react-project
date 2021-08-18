import react from 'react';
import validator from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';


class isValid extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            formInput: '',
            messege: '',
            colorMessage:''
        }
    }

    handleChange = (event) => {
            this.setState({
                formInput:event.target.value
            });
    }

    validator = (e) => {
        e.preventDefault();
        const isEmail = e.target.email.value;
        if (isEmail==='') {
            return;
        }else if(validator.isEmail(isEmail)) {
            this.setState({
                messege: 'Your email address is valid',
                colorMessage:'green'
            });
        } else {
             this.setState({
                 messege: 'Your email address is wrong',
                 colorMessage:'red'
            });
        }
    }
    
    cleanUp = (e) => {
        this.setState({
            formInput:''
        });
    }

    render() {
        return (
                <form onSubmit={this.validator}>
                    <div className='container text-center mt-4'>
                        <input
                            type='text'
                            name='email'
                            className=''
                            value={this.state.formInput}
                            onChange={this.handleChange}
                            onClick={this.cleanUp}
                        />
                    <button>validator</button>
                    <h5 className='mt-4'
                        style={{ color: this.state.colorMessage }}
                    >{this.state.messege}
                    </h5>
                    </div>
                </form>
        );
    }
}

export default isValid;