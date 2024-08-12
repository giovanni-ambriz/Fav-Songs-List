
import Song from "./Song"
export default function SongsList() {

  const songs = [
    {
      name: "Good For Nothing",
      artist: "DRAMA",
      album: "Dance Without Me",
      listened: false,
    },
    {
      name: "Linger",
      artist: "The Cranberries",
      album: "Everybody Else Is Doing it, So Why Cant We",
      listened: true,
    },
    {
      name: "Lovely Day",
      artist: "Bill Withers",
      album: "Menagerie",
      listened: true,
    }
  ]

  return (
    <>
      {songs.map((songs) => {
        return <Song key={songs.id} name={songs.name} artist={songs.artist} listened={songs.listened} />
      })}
    </>
  )
}