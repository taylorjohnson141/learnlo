import React, { Component } from 'react'
class Word extends Component{
  
  render (){
    return(
    <section>
    {this.props.currentWord}
  </section>
    )
  }
}
export default Word