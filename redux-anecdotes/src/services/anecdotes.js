import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = {content, votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id) => {
  const url = `${baseUrl}/${id}`
  const getResponse = await axios.get(url)
  const anecdoteToUpdate = getResponse.data
  const updatedAnecdote = {...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1}
  const putResponse = await axios.put(url, updatedAnecdote)
  return putResponse.data
}

export default {
    getAll,
    createNew,
    vote,
}