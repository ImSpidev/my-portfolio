/*Components*/
import { NavBar } from './components/navbar/NavBar'
import { Banner } from './components/banner/Banner'

/*CSS Imports*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  )
}

export default App
