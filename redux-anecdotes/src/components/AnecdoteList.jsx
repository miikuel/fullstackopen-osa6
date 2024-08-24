import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    
    const filter = useSelector(state => state.filter.toLowerCase())
    const anecdotes = useSelector(state => state.anecdotes).filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id)) 
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
    )}
    </>
    )
}

export default AnecdoteList