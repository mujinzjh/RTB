import { Component } from 'react'
import './index.scss';
import Login from './login';
import Regis from './regis';

interface stateInterface {
  isLogin: boolean | undefined
}
class Index extends Component<any, stateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  componentDidMount() {
    const flag: boolean = this.props && this.props.route && this.props.route.name == 'login';
    this.setState({
      isLogin: flag,
    });
    this.createForm = this.createForm.bind(this);
  }
  createForm() {
    if (this.state.isLogin) {
      return (
        <Login></Login>
      )
    } else {
      return (
        <Regis></Regis>
      )
    }
  }
  render() {
    return this.createForm();
  }
}

export default Index;