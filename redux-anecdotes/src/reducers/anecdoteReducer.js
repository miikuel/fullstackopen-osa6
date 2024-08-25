import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      return state.map(state => {
        if (state.id === action.payload) {
          return {...state, votes: state.votes + 1}
        }
        return state
      })
    },
    newAnecdote(state, action) {
      const anecdote = action.payload
      state.push({
        content: anecdote.content,
        id: anecdote.id,
        votes: anecdote.votes
      })
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, newAnecdote, setAnecdotes } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const createdAnecdote = await anecdotesService.createNew(content)
    dispatch(newAnecdote(createdAnecdote))
  }
}

export const addVote = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.vote(id)
    dispatch(voteAnecdote(updatedAnecdote.id))
  }
}

export default anecdotesSlice.reducer