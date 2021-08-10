import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    }

    this.AddOne = this.AddOne.bind(this);
    this.MinusOne = this.MinusOne.bind(this);
    this.Reset = this.Reset.bind(this);
  }


  AddOne=()=> {
    this.setState(state=>({
      count:state.count+1
    }));
  };

  
  
  MinusOne=()=> {
    this.setState(state=>({
      count: state.count-1
    }));
  };

  
  Reset() {
    this.setState({
      count:0
    });
  }
  
  componentDidMount() {
    const count = localStorage.getItem('count');
    if (count !==null) {
      this.setState({
        count: parseInt(count)
      });
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('count',this.state.count);
    });
  }

  
  render() {
      return (
      <div className='container-fluid'>
        <div className='row pt-2 mt-5'>
          <div className='col-sm-5'></div>
          <div className='col-sm-2  shadow p-3 mb-5 bg-white rounded'>
          <h1> Count : {this.state.count}</h1>
          <div className='btn-group pt-5 d-block'>
              <button onClick={this.AddOne} className=' btn btn-success btn-lg'>+1</button> 
              <button onClick={this.Reset} className='btn btn-info btn-lg'>Reset</button>
              <button onClick={this.MinusOne} className='btn btn-danger btn-lg'>-1</button>
          </div>
          </div>
          <div className='col-sm-5'></div>
        </div>
      </div>
      );
  };
}


export default Counter;