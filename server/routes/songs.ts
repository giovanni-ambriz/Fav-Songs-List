import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

//GET '/api/v1/songs'

router.get('/', async (req, res) => {
  try {
    const songs = await db.getSongs()
    res.json(songs)
  } catch (error) {
    res.sendStatus(500)
  }
})

//GET '/api/v1/songs/:id'

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const songs = await db.getSongsById(id)
    res.json(songs)
  } catch (error) {
    res.sendStatus(500)
  }
})

//POST '/api/v1/songs/'

router.post('/', async (req, res) => {
  const newSong = req.body
  try {
    await db.addNewSong(newSong)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

//DELETE '/api/v1/songs/:id'

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const songs = await db.deleteSong(id)
    res.json(songs)
  } catch (error) {
    res.sendStatus(500)
  }
})

//PATCH '/api/v1/songs/listened/:id

router.patch('/listened/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updateListened(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.patch('/listened/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.updateNotListened(id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

//GET '/api/v1/songs/artist/

router.get('/artist', async (req, res) => {
  const artist = String(req.query.artist)
  try {
    const songs = await db.getSongsByArtist(artist)
    res.json(songs)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
