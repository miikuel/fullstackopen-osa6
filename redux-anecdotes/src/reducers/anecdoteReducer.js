import { createSlice } from "@reduxjs/toolkit"

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
export default anecdotesSlice.reducer