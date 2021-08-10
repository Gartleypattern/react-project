import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            front: '',
            back:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addCard = () => {
        this.props.addCard(this.state.front, this.state.back);
        this.setState({
            front: '',
            back:''
        });
    }

    deleteCard = (event) => {
        this.props.deleteCard(event.target.dataset.index);
    }


    render() {

        const rows = this.props.cards.map((card,i) => {
            return (
                <tr key={i} >
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                    <td><button
                        className='btn btn-danger'
                        onClick={this.deleteCard}
                        data-index={i}>delete
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div className='container mt-5'>
                <div className='row mb-5'>
                    <div className='col-sm-5'></div>
                    <div className='col-sm-5'>
                        <h1>Card Editor</h1>
                    </div>
                    <div className='col-sm-5'></div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'>
                        <table className='table table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th>Front</th>
                                    <th>Back</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-3'></div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6 d-flex justify-content-between'>
                        <input
                            onChange={this.handleChange}
                            name='front'
                            placeholder='Front of the card'
                            value={this.state.front}
                            />
                            <input
                            onChange={this.handleChange}
                            name='back'
                            placeholder='back of the card'
                            value={this.state.back}
                        />
                        <button
                            onClick={this.addCard}
                            className='btn btn-primary'>Add card
                        </button>
                    </div>
                    <div className='col-sm-3'></div>
                </div>
                <div className='row row mt-3'>
                    <hr/>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm-5'></div>
                    <div className='col-sm-2'>
                        {this.props.cards.length ?
                            <button
                                className='btn btn-warning'
                                onClick={this.props.swichMode}>Switch to viewer
                            </button>
                            : ''
                        }
                    </div>
                    <div className='col-sm-5'></div>
                </div>
            </div>
        );
    }
}

class Viewer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            status: true,
            cardTurn: 0,
            num:1
        };
    }



    flipCard = () => {
        this.setState(state=>({
            status:!state.status
        }));
    }

    nextCard = () => {
        this.setState(state => {
            if (state.cardTurn+1 === this.props.cards.length) {
                return {
                        cardTurn:0
                    }
            } else {
                return {
                    cardTurn: state.cardTurn + 1
                }
                }
            });
    }
    
    

    render() {
        return (
            <section>
                <div className="container d-flex justify-content-center mt-5">
                    <h1>CardViewer</h1>
                </div>
                <div className="coantainer d-flex justify-content-center mt-5">
                    <h3
                        onClick={this.flipCard}
                        className='border border-dark py-5 px-5 bg-primary text-white'>
                        {this.state.status
                            ? this.props.cards[this.state.cardTurn].front
                            :this.props.cards[this.state.cardTurn].back
                        }
                        </h3>
                </div>
                <div className="container d-flex justify-content-center mt-5">
                    <button
                        className="btn btn-success"
                        onClick={this.nextCard}>Next Card
                    </button>
                </div>
                <hr />
                <div className="container d-flex justify-content-center mt5">
                    <button
                        className="btn btn-warning"
                        onClick={this.props.swichMode}>Swich to Editor
                    </button>
                </div>

            </section>
            
        );
    }
}

class FlashCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mode: true,
            cards: []
        }
        this.swichMode = this.swichMode.bind(this);
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }


    swichMode = ()=> {
        this.setState(state=>({
            mode:!state.mode
        }));
    }
    
    addCard = (front,back) => {
        this.setState(state=>({
            cards:[...state.cards,{front,back}]
        }));
    }

    deleteCard = (index) => {
        this.setState(state=>{
            const cards = [...state.cards];
            cards.splice(index, 1);
            return { cards };
        });
    }

    render() {
            if (this.state.mode) {
                return (
                    <Editor
                        swichMode={this.swichMode}
                        cards={this.state.cards}
                        addCard={this.addCard}
                        deleteCard={this.deleteCard}
                    />
                );
            } else {
                return (
                    <Viewer
                        swichMode={this.swichMode}
                        cards={this.state.cards}
                    />
                );
            }
    };
}

export default FlashCards;