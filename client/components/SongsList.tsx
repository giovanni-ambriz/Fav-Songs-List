import Song from "./Song"
import { useQuery } from "@tanstack/react-query"
import { fetchSongs } from "../apis/apiClient"

export default function SongsList() {
  const { data: songs, isPending, isError } = useQuery({ queryKey: ['songs'], queryFn: () => fetchSongs() })

  if (isError) {
    return <p>Something went wrong...</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      {songs.map((song, i) => {
        return <Song key={i} name={song.name} artist={song.artist} album={song.album} listened={song.listened} />
      })}
    </>
  )
}