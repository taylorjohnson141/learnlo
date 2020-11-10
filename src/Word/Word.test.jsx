import React from 'react';
import Word from './Word'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Word Component', () =>{
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
  it('should render a word correctly', () =>{
    render(<Word currentWord ={currentWord}/>)
    let wordCard = screen.getByRole('word')
    expect(wordCard).toBeInTheDocument()
  })
  it('should render correct error message if currentWord is undefined', () =>{
    render(<BrowserRouter><Word currentWord ={0}/></BrowserRouter>)
    let wordError = screen.getByRole('no-word-error')
    expect(wordError).toBeInTheDocument()
  })
  it('should have audio if card has audio', () =>{
    render(<BrowserRouter><Word currentWord ={currentWord}/></BrowserRouter>)
    let audio = screen.getByRole('audio')
    expect(audio.src).toEqual("https://media.merriam-webster.com/audio/prons/es/me/mp3/l/lejos01sp.mp3")
  })
  it('should have delete button', () =>{
    render(<BrowserRouter><Word currentWord ={currentWord}/></BrowserRouter>)
    let deleteButton = screen.getByRole('delete-button')
    expect(deleteButton).toBeInTheDocument()
  })
  it('should be able to show correct word', () =>{
    render(<BrowserRouter><Word currentWord ={currentWord}/></BrowserRouter>)
    let correctWord = screen.getByText('lejos')
    expect(correctWord).toBeInTheDocument()
  })
  it('should call delete word when button is clicked', () =>{
    let deleteFunction = jest.fn()
    render(<BrowserRouter><Word deleteWord = {deleteFunction}currentWord ={currentWord}/></BrowserRouter>)
    let deleteButton = screen.getByRole('delete-button')
    userEvent.click(deleteButton)
    expect(deleteFunction).toHaveBeenCalledTimes(1)
  })
})
