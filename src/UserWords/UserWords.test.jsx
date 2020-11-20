import React from 'react';
import UserWords from './UserWords'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('UserWords', () =>{
  let currentWords;
  beforeEach(() => {
    currentWords = [{
      hwi:{
        hw:"lejos",
        prs:[{sound: {audio: "lejos01sp"}}]
      },
      shortdef:[ "far away, distant",
      "long ago, a long way off",
      "by far"]
    },{
      hwi:{
      hw: "algo",
      prs:[{sound: {audio: "algo001sp"}}],
      },
      shortdef: ["somewhat, rather"]
  }
  
  ]
    })
  it('should render correct message if there are no words', () =>{
    render(<UserWords words = {[]}/>)
    let NoWordsMessage = screen.getByText('Input a word you would like to Study!')
    expect(NoWordsMessage).toBeInTheDocument()
  })
  it('should render SearchBar even if there are no words', () =>{
    render(<UserWords words = {[]}/>)
    let SearchBar = screen.getByText('Input a word you would like to Study!')
    expect(SearchBar).toBeInTheDocument()
  })
  it('should render correct words when are words', () =>{
    render(<UserWords words = {currentWords}/>)
    let far = screen.getByText('lejos')
    let something = screen.getByText('algo')
    expect(far).toBeInTheDocument()
    expect(something).toBeInTheDocument()
  })
})