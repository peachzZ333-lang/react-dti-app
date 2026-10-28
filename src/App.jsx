import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Smartphone from './pages/Smartphone'
import Tablet from './pages/Tablet'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="grow max-w-4xl w-[90%] mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/smartphone" element={<Smartphone />} />
            <Route path="/tablet" element={<Tablet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
