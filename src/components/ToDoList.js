import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: '',
            messegae:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
    const tasks =JSON.parse(localStorage.getItem('tasks'));
    if (tasks.length !==0) {
      this.setState({
          tasks
      });
    }
        
    window.addEventListener('beforeunload', () => {
     localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
    });
  }
    
    addTask = () => {
        if (!this.state.tasks.includes(this.state.input)) {
            this.setState(state=>({
                tasks: [...state.tasks, state.input],
                input: '',
                messegae:false
            }));
        } else {
            this.setState({
                messegae: true,
                input:''
            });
        }
    }
    deleteTask = (event) => {
        const index = event.target.dataset.index;
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            this.setState({
                tasks
            });
        });
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-5 p-5 mt-5 shadow '>
                        <p className='display-4'>List of tasks : </p>
                        <p className='text-danger'>{this.state.messegae?'This task already exist':''}</p>
                        <ul className='list-group'>
                            {this.state.tasks.map((task,i) => {
                                return (
                                    <div>
                                        <li key={i} className='
                                            list-group-item
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                            mt-2'>
                                        {task}
                                            <button
                                                className='btn btn-danger'
                                                onClick={this.deleteTask}
                                                data-index={i}
                                            >delete</button>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <div className='mt-5'>
                            <input
                                value={this.state.input}
                                className='form-control'
                                onChange={this.handleChange}
                            />
                            <button
                                onClick={this.addTask}
                                className='btn btn-primary mt-3'>Add Task
                            </button>
                        
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
        );
    };
}

export default ToDoList;