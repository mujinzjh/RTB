
import './App.css';
import axios from "axios";
import RouteConfig from "./Route/index";
import { Component } from 'react'
import { test1 } from './Services/serviceApis';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = { date: new Date() }
  };
  componentDidMount() {
    this.getData();
  }
  getData() {
    test1().then((res: any) => {
      console.log(res);

    })
    // axios.post('/api/rbm/login').then(res=>{
    //   console.log(res);

    // }).catch(err=>{
    //   console.log(err);
    // })
  }
  render() {
    return (
      <div>
        <RouteConfig />
      </div>
    )
  }
}

