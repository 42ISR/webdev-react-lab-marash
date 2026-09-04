import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Courses from "./components/Courses"
import Reviews from "./components/Reviews"
import './App.css'

function App() {
  

  return (
<div className="page">
  <Header />
  <Hero />
  <Courses  />
  <Reviews />
  <Footer/>
</div>
  )
}

export default App
