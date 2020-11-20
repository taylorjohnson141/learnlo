import React from 'react';
import QuizCard from './QuizCard'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

describe("QuizCard", () =>{
  let currentWord;
  beforeEach(() => {
    currentWord = {
      hwi:{
        hw:"lejos",
        prs:[{sound: {audio: "lejos01sp"}}]
      },
      shortdef:[ "far away, distant",
      "long ago, a long way off",
      "by far"]
    }
    })
    it('Should render correct error message if user has not added 4 words',() =>{
      let incrementScore = jest.fn()
      let decrementScore =jest.fn()
    render(<QuizCard incrementScore ={incrementScore} decrementScore = {decrementScore} favoriteWords = {[{shortdef:['testWord1']},{shortdef:['testWord2']},{shortdef:['testWord3']}]} currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText('Please Add at Least 4 words to Study!')
      expect(cardQuestion).toBeInTheDocument()
    })
    it('Should render the correct question', () =>{
      let incrementScore = jest.fn()
      let decrementScore =jest.fn()
      render(<QuizCard incrementScore ={incrementScore} decrementScore = {decrementScore} favoriteWords = {[{shortdef:['testWord1']},{shortdef:['testWord2']},{shortdef:['testWord3']},{shortdef:['testWord4']}]} currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText('What is the English translation of lejos?')
      expect(cardQuestion).toBeInTheDocument()
    })
    it('Should call the changeCurrent word function and incrememt score to be called when the correct button is clicked',() =>{
      let incrementScore = jest.fn()
      let decrementScore =jest.fn()
      let changeCurrentWord = jest.fn()
      render(<QuizCard incrementScore ={incrementScore} decrementScore = {decrementScore} favoriteWords = {[{shortdef:['testWord1']},{shortdef:['testWord2']},{shortdef:['testWord3']},{shortdef:['testWord4']}]} changeCurrentWord = {changeCurrentWord}currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText("far away, distant")
      userEvent.click(cardQuestion)
      expect(incrementScore).toBeCalled()
      expect(changeCurrentWord).toBeCalled()
    })
    it('Should call the changeCurrent word function with false when wrong button is clicked',() =>{
      let changeCurrentWord = jest.fn()
      render(<QuizCard changeCurrentWord = {changeCurrentWord}currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText("Weird")
      userEvent.click(cardQuestion)
      expect(changeCurrentWord).toBeCalledWith(false)
    })
})