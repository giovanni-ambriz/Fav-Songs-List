import request from 'superagent'
import { Songs, SongsData } from '../../models/songs'

const rootURL = '/api/v1/songs'

export async function fetchSongs(): Promise<Songs[]> {
  const res = await request.get(rootURL)
  return res.body
}

export async function fetchSongById(id: number): Promise<Songs> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

export async function addSong(newSong: SongsData) {
  await request.post(rootURL).send(newSong)
}
