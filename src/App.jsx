import './App.css'
import CardBenefits from './Components/CardBenfits'
import FeaturesCard from './Components/FeaturesCard'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import UseMyCardWorking from './Components/UseMyCardworking'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <FeaturesCard />
     <UseMyCardWorking />
     <CardBenefits />
     <FAQ />
     <Footer />
    </>
  )
}

export default App
