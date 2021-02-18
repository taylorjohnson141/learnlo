import React from 'react';
import HomeScreen from './HomeScreen'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
describe("HomeScreen", () =>{
  it('Should render correct text to page', () =>{
    render(<HomeScreen/>)
    let SearchBarText = screen.getByText('Translate English or Spanish')
    expect(SearchBarText).toBeInTheDocument()
  })
})