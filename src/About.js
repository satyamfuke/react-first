import React from 'react';
class About extends React.Component{
    constructor(){
        super();
            this.state = {
                name: 'satyam',
                age: 25
            }
        }
    componentDidMount(){
        console.log('did mount');
        console.log(this.props.name);
    }

    componentDidUpdate(){
        console.log('Props in update My name');
    }
    render(){
        return(<div>
            <h1>About Us</h1>
            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            <h2>{this.props.name}</h2>
            <button onClick = {()=>{this.setState({name: 'Satyam Fuke'})}}>Update State</button>
        </div>)
    }
}

export default About;