import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props:any){
    super(props);
    this.state = {date:new Date()}
  };
  componentDidMount(){
    this.getData()
  }
  getData(){
    axios.post('/api/rbm/login').then(res=>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div>return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )</div>
    )
  }
}
