import React from 'react';
import HomeScreen from './HomeScreen'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe("HomeScreen", () =>{
  it('Should render correct text to page', () =>{
    render(<HomeScreen/>)
    let firstHeader = screen.getByText('Learn Spanish With LearnLo!')
    let secondHeader = screen.getByText('Choose words to study!')
    let thirdHeader = screen.getByText('Take quizzes and progress!')
    expect(firstHeader).toBeInTheDocument()
    expect(secondHeader).toBeInTheDocument()
    expect(thirdHeader).toBeInTheDocument()
  })
})