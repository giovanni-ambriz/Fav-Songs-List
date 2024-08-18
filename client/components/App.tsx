import SongsList from "./SongsList"
import SongForm from "./SongForm"

function App() {
  return (
    <>
      <header className="header">
        <h1>My Favorite Songs</h1>
      </header>
      <section className="main">
        <SongsList />
        <SongForm />
      </section>
    </>
  )
}

export default App
