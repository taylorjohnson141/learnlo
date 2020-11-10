import React from 'react';
import { screen, render,fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import {getWord} from '../fetchCalls/fetchCalls'
import { MemoryRouter } from 'react-router-dom';
import App from './App';
jest.mock('../fetchCalls/fetchCalls')


describe('App', () =>{
  describe('Initial rendering',() =>{
    it('Should render a header', () =>{
      render(<MemoryRouter><App/></MemoryRouter>)
      let header = screen.getByText('Learnlo!')
      expect(header).toBeInTheDocument()
    })
    it('Should render correct Components on load', () =>{
      render(<MemoryRouter><App/></MemoryRouter>)
      let proofOfHome = screen.getByText('Learn Spanish With LearnLo!')
      let proofOfNav = screen.getByText('My Words')
      expect(proofOfHome).toBeInTheDocument()
      expect(proofOfNav).toBeInTheDocument()
    })
  })
  describe('Router works',  () =>{
    it('Should render userPage correctly', async() =>{
      render(<MemoryRouter><App/></MemoryRouter>)
      let MyWords = screen.getByText('My Words')
      userEvent.click(MyWords)
      let userWords  = await waitFor(() => screen.getByText('No Words Yet!'))
      expect(userWords).toBeInTheDocument()
    })
    it('Should render Quiz correctly', async () =>{
      render(<MemoryRouter><App/></MemoryRouter>)
      let Quiz = screen.getByText('Quiz')
      userEvent.click(Quiz)
      let QuizPage  = await waitFor(() => screen.getByText('No Words to Study Yet!'))
      expect(QuizPage).toBeInTheDocument()
    })
    it('Should be able to go back home', async () =>{
      render(<MemoryRouter><App/></MemoryRouter>)
      let Quiz = screen.getByText('Quiz')
      userEvent.click(Quiz)
      let QuizPage  = await waitFor(() => screen.getByText('No Words to Study Yet!'))
      let homeLink = screen.getByText('Home')
      userEvent.click(homeLink)
      let proofOfHome = await waitFor (() => screen.getByText('Learn Spanish With LearnLo!'))
      expect(proofOfHome).toBeInTheDocument()    
    })
    describe('SearchBar-App',  () =>{
      it('Should be able to add a word to userPage and see same word on quiz page', async() =>{
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
        render(<MemoryRouter><App/></MemoryRouter>)
        let MyWords = screen.getByText('My Words')
        userEvent.click(MyWords)
        let userWords  = await waitFor(() => screen.getByText('No Words Yet!'))
        let form = screen.getByTestId('form')
        userEvent.type(form,'algo')
        fireEvent.submit(form);
        await waitFor(() => expect(screen.getByText('lejos')).toBeInTheDocument())
        let Quiz = screen.getByText('Quiz')
        userEvent.click(Quiz)
        await waitFor(() => expect(screen.getByText('What is the English translation of lejos?')).toBeInTheDocument())

      })
    })
  })
})
