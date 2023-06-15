import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/Hero"


export function App() {
  return (
    <>
    <div className='bg-hero-pattern bg-cover bg-center'>
      <Navbar/>
      <Hero/>
      <div className="h-[350px]"></div>
    </div> 
    </>
  )
}

