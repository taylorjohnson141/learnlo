import React from 'react';
import QuizCard from './QuizCard'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

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
    it('Should render the correct question', () =>{
      render(<QuizCard currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText('What is the English translation of lejos?')
      expect(cardQuestion).toBeInTheDocument()
    })
    it('Should call the changeCurrent word function with true when the correct button is clicked',() =>{
      let changeCurrentWord = jest.fn()
      render(<QuizCard changeCurrentWord = {changeCurrentWord}currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText("far away, distant")
      userEvent.click(cardQuestion)
      expect(changeCurrentWord).toBeCalledWith(true)
    })
    it('Should call the changeCurrent word function with false when wrong button is clicked',() =>{
      let changeCurrentWord = jest.fn()
      render(<QuizCard changeCurrentWord = {changeCurrentWord}currentWord = {currentWord}/>)
      let cardQuestion = screen.getByText("Weird")
      userEvent.click(cardQuestion)
      expect(changeCurrentWord).toBeCalledWith(false)
    })
})