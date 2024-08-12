import { useState } from 'react'

export default function SongForm() {

  const [newSong, setNewSong] = useState('')
  const [submitSong, setSubmitSong] = useState('')

  const handleChange = (e) => {
    setNewSong(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitSong(newSong)
    setNewSong('')
  }
  return (
    <>
      <p>{newSong}</p>
      <p>Submitted: {submitSong}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} value={newSong} id="name"></input>
        <button>Submit</button>
      </form>
    </>
  )
}