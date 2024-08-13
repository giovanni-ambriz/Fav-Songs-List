import Song from "./Song"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchSongs, deleteSong } from "../apis/apiClient"

export default function SongsList() {
  const queryClient = useQueryClient()

  const { data: songs, isPending, isError } = useQuery({ queryKey: ['songs'], queryFn: () => fetchSongs() })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteSong(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    }
  })

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id)
  }

  if (isError) {
    return <p>Something went wrong...</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      {songs.map((song) => {
        return <Song key={song.id} id={song.id} name={song.name} artist={song.artist} album={song.album} listened={song.listened} onDelete={handleDelete} />
      })}
    </>
  )
}