import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: '',
            error:''
        }
    }

    componentDidMount() {
        const tasks =JSON.parse(localStorage.getItem('tasks'));
            this.setState({tasks});
    }
    
    componentDidUpdate() {
        localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
    }
    
    
    addTask = () => {
        if (this.state.input==='') {
            this.setState(() => ({error:'Please enter a valid input'}));
            return;
        } else if (this.state.tasks.includes(this.state.input)) {
            this.setState(() => ({
                    error: `${this.state.input} is already exist`,
                    input:''
            }));
            return;
        }

        this.setState((state) => ({
                tasks: [...state.tasks, state.input],
                input: '',
                error:''
        }));
    }

    deleteTask = (event) => {
        const index = event.target.dataset.index;
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            this.setState({tasks});
        });
    }

    deleteAll = () => {
        this.setState(() => {
            return {
                tasks: [],
                messegae:''
            }
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
                        {this.state.error && <p className='text-danger'>{this.state.error}</p>}
                        <ul className='list-group'>
                            {this.state.tasks.map((task,i) => {
                                return (
                                    <div>
                                        <li key={i}
                                            className='
                                            list-group-item
                                            d-flex
                                            justify-content-between
                                            align-items-center
                                            mb-2
                                            '>
                                        {task}
                                            <button
                                                key={i}
                                                className='btn btn-danger'
                                                onClick={this.deleteTask}
                                                data-index={i}
                                            >delete
                                            </button>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <div className='mt-2'>
                            <input
                                value={this.state.input}
                                className='form-control'
                                onChange={this.handleChange}
                            />
                            <div className='d-flex justify-content-between'>
                                <button
                                    onClick={this.addTask}
                                    className='btn btn-primary mt-3'>Add Task
                                </button>
                                <button
                                    onClick={this.deleteAll}
                                    className='btn btn-danger mt-3'>Delete All
                                </button>
                            </div>
                        
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
        );
    };
}

export default ToDoList;