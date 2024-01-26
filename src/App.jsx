import Navbar from './components/Navbar'
import Hero from "./components/Hero.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="bg-primary font-[Inter] text-white-500">
        <Navbar />
        <Hero/>
        <MainContent/>
        <Footer/>
    </main>
  )
}

export default App
