import React from 'react';
import SearchBar from './SearchBar'
import { screen, render,fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import {getWord} from '../fetchCalls/fetchCalls'

jest.mock('../fetchCalls/fetchCalls')

describe('SearchBar', () =>{
it('Should render a form', () =>{
 render(<SearchBar/>)
 let form = screen.getByTestId('form')
 let input = screen.getByTestId('form-input')
 expect(form).toBeInTheDocument()
 expect(input).toBeInTheDocument()
})
  it('Should Call Api on Submit', async () =>{
    render(<SearchBar/>)
    let form = screen.getByTestId('form')
    userEvent.type(form,'algo')
    fireEvent.submit(form);
    
    expect(getWord).toHaveBeenCalledTimes(1)

  })
  it('Render correct error message if word is in english', async () =>{
    getWord.mockResolvedValueOnce({meta :{
      lang :'en'
    }})

    render(<SearchBar/>)
    let form = screen.getByTestId('form')
    userEvent.type(form,'algo')
    fireEvent.submit(form);
    
    let error = await waitFor(() =>screen.getByText('Please Type in a Spanish Word'))
    expect(error).toBeInTheDocument()
  })
  it('Render correct error message if given back an empty string', async () =>{
    getWord.mockResolvedValueOnce('')

    render(<SearchBar/>)
    let form = screen.getByTestId('form')
    userEvent.type(form,'algo')
    fireEvent.submit(form);
    
    let error = await waitFor(() =>screen.getByText('Sorry we could not find that word!'))
    expect(error).toBeInTheDocument()
  })
  it('Should call add word if given valid word', async () =>{
    getWord.mockResolvedValueOnce({
      meta :{
        lang :'es'
      },
      hwi:{
        hw:"lejos",
        prs:[{sound: {audio: "lejos01sp"}}]
      },
      shortdef:[ "far away, distant",
      "long ago, a long way off",
      "by far"]
    })
    let addWord = jest.fn()
    addWord.mockImplementation(value => {
      return value
    })
    render(<SearchBar addWord = {addWord}/>)
    let form = screen.getByTestId('form')
    userEvent.type(form,'algo')
    fireEvent.submit(form);
    await waitFor(() => expect(addWord).toHaveBeenCalledTimes(1))

  })
})
