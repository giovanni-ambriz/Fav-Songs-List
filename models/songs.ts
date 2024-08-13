// export interface Songs {
//   id: number
//   name: string
//   artist: string
//   album: string
//   listened: boolean
// }

export interface SongsData {
  name: string
  artist: string
  album: string
  listened: boolean
}

export interface Songs extends SongsData {
  id: number
}
