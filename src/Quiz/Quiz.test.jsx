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
  it('Should renderScore when right cards are clicked',async () =>{
    render(<Quiz favoriteWords = {favoriteWords}/>)
    let cardQuestion = screen.getByText("far away, distant")
    userEvent.click(cardQuestion)

    let cardQuestion2= await waitFor( () =>screen.getByText('somewhat, rather'))
    userEvent.click(cardQuestion2)
    let score = await waitFor ( () => screen.getByText('Your final score is 100%'))
    expect(score).toBeInTheDocument()
  })
  it('Should render correct Score when user is wrong cards are clicked', async () =>{
    render(<Quiz favoriteWords = {favoriteWords}/>)
    let cardQuestion = screen.getByText("far away, distant")
    userEvent.click(cardQuestion)
    let cardQuestion2= await waitFor( () =>screen.getByText('Weird'))
    userEvent.click(cardQuestion2)
    let score = await waitFor ( () => screen.getByText('Your final score is 50%'))
    expect(score).toBeInTheDocument()
  })
})