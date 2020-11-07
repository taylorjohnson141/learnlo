import React, { Component } from 'react'
class Word extends Component{
  constructor(props){
    super()
  }
  render (){
    return(
    <section>
    {this.props.currentWord}
  </section>
    )
  }
}
export default Word