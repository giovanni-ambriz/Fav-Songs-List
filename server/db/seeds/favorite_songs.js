/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('favorite_songs').del()
  await knex('favorite_songs').insert([
    { id: 1, name: 'Good For Nothing', artist: 'DRAMA', album: 'Dance Without Me', listened: true },
    { id: 2, name: 'Linger', artist: 'The Cranberries', album: 'Everybody Else Is Doing it, So Why Cant We', listened: false },
    { id: 3, name: 'Lovely Day', artist: 'Bill Withers', album: 'Menagerie', listened: true }
  ]);
};
