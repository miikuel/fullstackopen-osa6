import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { notificationCreate, notificationDelete } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ""
      const createdAnecdote = await anecdotesService.createNew(content)
      dispatch(newAnecdote(createdAnecdote))
      dispatch(notificationCreate(content))
      setTimeout(() => dispatch(notificationDelete()), 5000)
  }

  return (
  <>
  <h2>create new</h2>
  <form onSubmit={addAnecdote}>
    <div>
      <input name="anecdote" />
    </div>
    <button type="submit" >create</button>
  </form>
  </>
  )
}

export default AnecdoteForm