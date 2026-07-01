import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar   from './Components/Navbar'
import Footer   from './Components/Footer'
import Home     from './Pages/Home'
import About    from './Pages/About'
import Store    from './Pages/Store'
import Contact  from './Pages/Contact'
import NotFound from './Pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-body bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />}     />
            <Route path="/nosotros" element={<About />}    />
            <Route path="/tienda"   element={<Store />}    />
            <Route path="/contacto" element={<Contact />}  />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
