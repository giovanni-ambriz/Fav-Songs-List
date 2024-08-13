import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { SongsData } from '../../models/songs'
import { addSong } from '../apis/apiClient'

export default function SongForm() {

  const [newSong, setNewSong] = useState('')
  const [newArtist, setNewArtist] = useState('')
  const [newAlbum, setNewAlbum] = useState('')
  const [newListened, setNewListened] = useState(false)


  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (songs: SongsData) => addSong(songs),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      setNewSong('')
      setNewArtist('')
      setNewAlbum('')
      setNewListened(false)
    }
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSong(e.target.value)
  }

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewArtist(e.target.value)
  }

  const handleAlbumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAlbum(e.target.value)
  }

  const handleListenedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewListened(e.target.checked)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addMutation.mutate({ name: newSong, artist: newArtist, album: newAlbum, listened: newListened })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} value={newSong} id="name"></input>
        <label htmlFor="artist">Artist: </label>
        <input onChange={handleArtistChange} value={newArtist} id="artist"></input>
        <label htmlFor="album">Album: </label>
        <input onChange={handleAlbumChange} value={newAlbum} id="album"></input>
        <label htmlFor="listened">Do you know the lyrics?: </label>
        <input onChange={handleListenedChange} type="checkbox" id="listened"></input>
        <button>Submit</button>
      </form>
    </>
  )
}