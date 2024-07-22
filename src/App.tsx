import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Items, Pokemon, Pokemons } from './pages'

function App() {

  return (
   <Router>
     <Routes>
      <Route path='/pokemons/:name' element={<Pokemon />}></Route>
      <Route path='/pokemons' element={<Pokemons />}></Route>
      <Route path='/items' element={<Items />}></Route>
      <Route path='/' element={<Pokemons />}></Route>
     </Routes>
   </Router>
  )
}

export default App
