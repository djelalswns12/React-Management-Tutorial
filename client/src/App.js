
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Login,Main, About, User } from './pages';

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
    <Router>
        <Route exact path='/' component={Login}/>
        <Route path='/about' component={About}/>
        <Route path="/user" component={User} />
        <Route path='/main' component={Main}/>
    </Router>
      /*
      this.state.customers ? this.state.customers.map(c=>{
        return(<Customer id={c.id} name={c.name} img={c.img} />) }) : ""*/
      );
  }
    
}

export default App;
