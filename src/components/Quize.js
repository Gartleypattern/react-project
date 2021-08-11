import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Question1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status:false
        }
    }
    
    changeResult = () => {
        if (this.state.status) {
            return;
        }
        this.setState({
            status:true
        });
        this.props.result();
    }

    render = () => {
        return (
            <div>
                <p className='display-5'><strong>Question One :</strong>1 +5</p>
                <div className='btn-group mt-3'>
                    <button className='btn btn-primary'>8</button>
                    <button
                        onClick={this.changeResult}
                        className='btn btn-primary'>6</button>
                    <button className='btn btn-primary'>15</button>
                </div>
            </div>
        );
    }
}
class Question2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status:false
        }
    }
    
    changeResult = () => {
        if (this.state.status) {
            return;
        }
        this.setState({
            status:true
        });
        this.props.result();
    }


    render = () => {
        return (
            <div>
                <p className='display-5'><strong>Question Two :</strong>12 + 3</p>
                <div className='btn-group mt-3'>
                    <button
                        onClick={this.changeResult}
                        className='btn btn-primary'>15</button>
                    <button className='btn btn-primary'>25</button>
                    <button className='btn btn-primary'>2</button>
                </div>
            </div>
        );
    }
}
class Question3 extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            status:false
        }
    }
    
    changeResult = () => {
        if (this.state.status) {
            return;
        }
        this.setState({
            status:true
        });
        this.props.result();
    }

    render = () => {
        return (
            <div>
                <p className='display-5'><strong>Question Three :</strong>35 + 12</p>
                <div className='btn-group mt-3'>
                    <button className='btn btn-primary'>38</button>
                    <button className='btn btn-primary'>22</button>
                    <button
                        onClick={this.changeResult}
                        className='btn btn-primary'>47</button>
                </div>
            </div>
        );
    }
}
class Question4 extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            status:false
        }
    }
    
    changeResult = () => {
        if (this.state.status) {
            return;
        }
        this.setState({
            status:true
        });
        this.props.result();
    }

    render = () => {
        return (
            <div>
                <p className='display-5'><strong>Question Three :</strong>35 + 12</p>
                <div className='btn-group mt-3'>
                    <button className='btn btn-primary'>38</button>
                    <button className='btn btn-primary'>22</button>
                    <button
                        onClick={this.changeResult}
                        className='btn btn-primary'>47</button>
                </div>
            </div>
        );
    }
}


class Quize extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allQuestion:3,
            questionNumber: 1,
            score: 0,
            showResult:false
        }
    }

    Privious = () => {
        if (this.state.questionNumber === 1) {
            return;
        }
        this.setState(state=>({
            questionNumber:state.questionNumber-1
        }));
    }

    Next = () => {
        if (this.state.questionNumber === 3) {
            return;
        }
        this.setState(state=>({
            questionNumber:state.questionNumber+1
        }));
    }
    
    changeResult = () => {
        if (this.state.score===this.state.allQuestion) {
            return;
        } 
            
        this.setState(state=>({
                score:state.score+1
            }));
    }
    


    render = () => {
        
        if (this.state.questionNumber === 1) {
            return (
                <div className='container text-center mt-5' style={{ width: '60%' }}>
                    <Question1 result={this.changeResult} />
                    <hr />
                    <div className='mt-3'>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Privious}>Previous
                        </button>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Next}>Next
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p>{this.state.questionNumber} of {this.state.allQuestion}</p>
                        <p>score : {this.state.score} </p>
                    </div>
                </div>
            );
        } else if (this.state.questionNumber === 2) {
            return (
                <div className='container text-center mt-5' style={{ width: '60%' }}>
                    <Question2 result={this.changeResult} />
                    <hr />
                    <div className='mt-3'>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Privious}>Previous
                        </button>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Next}>Next
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p>{this.state.questionNumber} of {this.state.allQuestion}</p>
                        <p>score :{this.state.score} </p>
                    </div>
                </div>
            )
        } else if (this.state.questionNumber === 3) {
            return (
                <div className='container text-center mt-5' style={{ width: '60%' }}>
                    <Question3 result={this.changeResult} />
                    <hr />
                    <div className='mt-3'>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Privious}>Previous
                        </button>
                        <button
                            className='btn btn-warning mx-2'
                            onClick={this.Next}>Next
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p>{this.state.questionNumber} of {this.state.allQuestion}</p>
                        <p>score : {this.state.score} </p>
                    </div>
                </div>
            );
        } 
    }
}

export default Quize;
