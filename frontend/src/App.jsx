import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import SignInForm from './components/SignInForm'
import ProductsIndex from './components/ProductsIndex'
import SignUpForm from './components/SignUpForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar /> 
  },
  {
    path: 'signin',
    element: <SignInForm />,
  },
  {
    path: 'signup',
    element: <SignUpForm />
  }
])

function App() {
  return (
    
      <>
        <RouterProvider router={router}>
            <NavBar/>
        </RouterProvider>
      </>
     
   
  )
}

export default App
