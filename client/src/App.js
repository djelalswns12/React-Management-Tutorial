
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';


class App extends Component {
  state={
    customers:""
  }
  componentDidMount()
  {
    this.callApi()
    .then(res=> this.setState({customers:res}))
    .catch(err => console.log(err));
  }
  callApi = async ()=>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render(){
    return (
      this.state.customers ? this.state.customers.map(c=>{
        return(<Customer id={c.id} name={c.name} img={c.img} />) }) : ""
      );
  }
    
}

export default App;
