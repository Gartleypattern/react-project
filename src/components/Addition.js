import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: Math.ceil(Math.random()*10),
            num2: Math.ceil(Math.random()*10),
            correct: 0,
            wrong:0,
            response: '',
            color:false
        }
    }

    updateResponse = (event) => {
        this.setState({response: event.target.value});
    }

    inputKeyPress = (event) => {
        if (event.key === 'Enter') {
            const answer = parseInt(this.state.response);
            if (answer === this.state.num1 + this.state.num2) {
                this.setState(state => ({
                    correct: state.correct + 1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: '',
                    color:false
                }));
            } else {
                this.setState(state=>({
                    response: '',
                    color: true,
                    wrong:state.wrong+1
                }));
            }
        }
    }
    render(){
        if (this.state.correct === 3) {
            return this.renderWin();
        } else if(this.state.wrong===3){
            return this.renderLose();
        } else {
            return this.renderProblem();
        }
    }
    
    renderProblem = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5'></div>
                    <div className='col-sm-3'>
                        <div className='text-center'>
                            <div className={this.state.color ?'text-danger':''}>
                                <p className='display-1'><strong>{this.state.num1} + {this.state.num2}</strong></p>
                            </div>
                            <input
                                value={this.state.response}
                                onChange={this.updateResponse}
                                onKeyPress={this.inputKeyPress}
                                className='form-control'
                            />
                            <span className='m-3'>correct : {this.state.correct}</span>
                            <span>wrong : {this.state.wrong}</span><br/>
                            <button
                                className='btn btn-primary m-2'
                                onClick={this.resetScore}
                            >reset
                            </button>
                        </div>
                    </div>
                    <div className='col-sm-5'></div>
                </div>
            </div>
        );
    }
        
    
    
    renderWin = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-5'>
                        <p className='text-primary display-1'><strong>You are win</strong></p>
                        <button
                            className='btn btn-primary text-center'>
                            Back to game
                        </button>
                    </div>
                    <div className='col-sm-5'></div>
                </div>
            </div>
        );
    }
    renderLose = () => {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-5'>
                        <p className='text-danger display-1'><strong>You are lose</strong></p>
                        <button
                            className='btn btn-primary text-center'>
                            Back to game
                        </button>
                    </div>
                    <div className='col-sm-5'></div>
                </div>
            </div>

        );
    }
    resetScore = () => {
        this.setState({
            score:0
        });
    }
}

export default Addition;
