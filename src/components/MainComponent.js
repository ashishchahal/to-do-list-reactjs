import React, {Component} from 'react';

let textStyle={
    width: 250,
    border: "2px solid red"
}

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            listArray: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        this.setState({
            listArray:this.state.userInput.split(',')
        })
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    render(){
        let finalArray = this.state.listArray.map(item=>
            <li>{item}</li>
        )
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                    value={this.state.userInput} 
                    onChange={this.handleChange} 
                    placeholder="insert a comma between each element" 
                    style={textStyle}/> <br />
                    <button type="submit">Submit</button>
                </form>
                <h2>The To-do-List is:</h2>
                <ul>
                    {finalArray}
                </ul>
            </div>
        )
    }
}

export default Main;