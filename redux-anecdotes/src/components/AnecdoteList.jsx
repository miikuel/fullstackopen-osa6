import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationVote, notificationDelete } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    
    const filter = useSelector(state => state.filter.toLowerCase())
    const anecdotes = useSelector(state => state.anecdotes).filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(addVote(id))
        dispatch(notificationVote(content))
        setTimeout(() => dispatch(notificationDelete()), 5000) 
    }

    return (
    <>
    {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => 
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
    )}
    </>
    )
}

export default AnecdoteList