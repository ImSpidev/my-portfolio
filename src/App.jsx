/*Components*/
import { NavBar } from './components/navbar/NavBar'
import { Banner } from './components/banner/Banner'
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';

/*CSS Imports*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
    </div>
  )
}

export default App
