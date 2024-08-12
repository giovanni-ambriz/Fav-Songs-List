interface Props {
  id: number
  name: string
  artist: string
  album: string
  listened: boolean
}

export default function Song({ id, name, artist, listened }: Props) {
  return (
    <div>
      <p key={id}>{name} by {artist}</p>
      {listened && <p>I know this song</p>}
    </div>
  )
}