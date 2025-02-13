import './App.css'
import {Route, Routes} from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Work from './Pages/Work'
import Header from './Components/Header'
import Home from './Pages/Home'
import Components from './Pages/Components'
import Socials from './Pages/Socials' 


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/components' element={<Components/>}/>
        <Route path='/socials' element={<Socials/>}/>
        <Route path='/work' element={<Work />} />
        <Route path="/" element={<Components />} />
      </Routes>
     
    </div>
  )
}

export default App

