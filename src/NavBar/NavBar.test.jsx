import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
 import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('Should render the correct content', () =>{
    render(<MemoryRouter><NavBar/></MemoryRouter>)
    let myWordsLink = screen.getByText('My Words')
    let HomeLink = screen.getByText('Home')
    let QuizLink = screen.getByText('Quiz')
    expect(myWordsLink).toBeInTheDocument()
    expect(HomeLink).toBeInTheDocument()
    expect(QuizLink).toBeInTheDocument()
  })
  it('Should go WordArea when Word are is clicked', () =>{
    let myWordsLink = screen.getByText('My Words')
    userEvent.click(myWordsLink)
    expect
  })
})