import { Component } from 'react'
import List from './components/List'
import News from './components/News'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: ["孙悟空", '猪八戒', '唐僧', '沙和尚'],
      obj: {
        name: "新闻组件",
        desc: "星战大反派“维达”扮演者去世 终年85岁(图)"
      }
    }
  }
  render(){
    return (
      <div>
        App hello react
        <List  list={this.state.list}/>
        <News name={this.state.obj.name} desc={this.state.obj.desc}></News>
      </div>
    )
  }
}