interface Props {
  name: string
  artist: string
  album: string
  listened: boolean
  onDelete: (id: number) => void
}

export default function Song({ id, name, artist, album, listened, onDelete }: Props) {
  return (
    <div>
      <p><b>{name}</b> by <b>{artist}</b> from the album: <b>"{album}"</b></p>
      {listened ? <p><i>I know the lyrics of this song</i></p> : <p><i>I don't know the lyrics yet</i></p>}
      <button onClick={() => onDelete(id)}>Remove song </button>
    </div>
  )
}