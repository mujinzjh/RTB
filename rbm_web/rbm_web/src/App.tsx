
import './App.css';
import axios from "axios";
import RouteConfig from "./Route/index";
import { Component } from 'react'

export default class App extends Component {
  constructor(props:any){
    super(props);
    this.state = {date:new Date()}
  };
  componentDidMount(){
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
      <div>
     <RouteConfig />
      </div>
    )
  }
}
