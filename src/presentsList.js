import { Component } from 'react';
import ball from './ball.jpg';

export class List extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            friendsList: []
        };
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Please, enter the name!')
        } else {
        let listArray = this.state.friendsList;
        listArray.push(input);
        this.setState({friendsList: listArray, userInput: ''})
    }
}

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem(){
        let listArray = this.state.friendsList;
        listArray = [];
        this.setState({friendsList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text" placeholder="Write the name here"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn btn-add'>Add</button>
            </div>
            <ul>
                {this.state.friendsList.map((item, index) => (
                    <li onClick={this.crossWord} key={index}>
                        <img src={ball} alt="cristmas ball" width='40px'/>
                        {item}
                    </li>
                ))}
            </ul>
            <div className='container'>
                <button onClick={() =>this.deleteItem()} className='btn btn-delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}