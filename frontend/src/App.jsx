import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SignInForm from './components/SignInForm'
import ProductsIndex from './components/Product/ProductsIndex'
import ProductShow from './components/Product/ProductShow'
import SignUpForm from './components/SignUpForm'
import Home from './components/Home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: 'signin',
    element: <SignInForm />,
  },
  {
    path: 'signup',
    element: <SignUpForm />
  },
  {
    path: 'products',
    element: <ProductsIndex/>,
    children: [
      {
        path: 'productId',
        element: <ProductShow/>
      }
    ]
  },
  {
    path: '*',
    element: <Home />
  }
])

function App() {
  return (
    
      <>
        <RouterProvider router={router}>
            <Home/>
        </RouterProvider>
      </>
     
   
  )
}

export default App
