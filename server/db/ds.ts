import connection from './connection'
import { Songs } from '../../models/songs'

const db = connection

export function getSongs(): Promise<Songs[]> {
  return db('favorite_songs').select()
}

export function getSongsById(id: number): Promise<Songs> {
  return db('favorite_songs').where({ id }).select().first()
}

export function deleteSong(id: number) {
  return db('favorite_songs').where({ id }).del()
}

export function addNewSong(song: Songs): Promise<Songs[]> {
  return db('favorite_songs').insert(song)
}

export function updateListened(id: number, listened: boolean): Promise<Songs> {
  return db('favorite_songs').where({ id }).update({ listened })
}

export function getSongsByArtist(artist: string): Promise<Songs[]> {
  return db('favorite_songs').where({ artist }).select()
}
