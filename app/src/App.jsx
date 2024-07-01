import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './app/store'

import { Provider } from 'react-redux'
import Layout from './Layout'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import Pagenotfound from './Components/Pages/Pagenotfound'
import Signup from './Components/Users/Signup'

const router =  createBrowserRouter([
  {
    path:'',
    element:<Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:'*',
        element:<Pagenotfound />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    
  )
}

export default App
