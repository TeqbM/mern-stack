import Header from './Header'
import Footer from './Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import Singleblog from './Components/Pages/Singleblog'
import Contact from './Components/Pages/Contact'
import Pagenotfound from './Components/Pages/Pagenotfound'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<Singleblog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Layout
