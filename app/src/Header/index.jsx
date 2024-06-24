import { Link, NavLink } from 'react-router-dom'
import Container from '../Components/Atoms/Container'
function Header(){
     return(
          <header className="bg-sky-200/70 backdrop-blur py-3 px-4">     
               <Container>
                    <nav className='flex items-center justify-between'>
                         <div className="logo">
                              <Link to="/" className='text-sky-600 text-2xl font-semibold'> ):( </Link>
                         </div>
                         <ul className='flex menu'>
                              <li><NavLink to="/" >Home</NavLink></li>
                              <li><NavLink to="/about">About us</NavLink></li>
                              <li><NavLink to="/blog">Blog</NavLink></li>
                              <li><NavLink to="/contact">Contact us</NavLink></li>
                         </ul>
                    </nav>
               </Container>
          </header>
     )
}
export default Header