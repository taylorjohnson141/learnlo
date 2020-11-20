import React from 'react';
import Quiz from './Quiz'
import { screen, render,waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
describe('Quiz', () =>{
  let favoriteWords
  beforeEach(() => {
    favoriteWords = [{
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
  },
  {
    hwi:{
      hw:"gato",
      prs:[{sound: {audio: "gato"}}]
    },
    shortdef:[ "cat"]
  },{
  hwi:{
    hw:"perro",
    prs:[{sound: {audio: "dog"}}]
  },
  shortdef:[ "dog"]
}
  ]
    })
  it('Should Render the correct message if there are no words' ,() =>{
    render(<Quiz favoriteWords = {[]}/>)
    let noWordsMessage = screen.getByText('No Words to Study Yet!')
    expect(noWordsMessage).toBeInTheDocument()
  })
  it('Should Render QuizCards when given words', () =>{
    render(<Quiz favoriteWords = {favoriteWords}/>)
    let cardQuestion= screen.getByText('What is the English translation of lejos?')
    expect(cardQuestion).toBeInTheDocument()
  })
})