import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SignInForm from './components/SignInForm'
import ProductsIndex from './components/Product/ProductsIndex'
import ProductShow from './components/Product/ProductShow'
import SignUpForm from './components/SignUpForm'
import Home from './components/Home/Home'
import CartItemsIndex from './components/CartItem/CartItemsIndex'
import CreateReview from './components/Review/CreateReview'
import ReviewsIndex from './components/Review/ReviewsIndex'
import EditReview from './components/Review/EditReview'
import Checkout from './components/Checkout/Checkout'

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
  },
  {
    path: '/products/:productId',
    element: <ProductShow/>
  },
  {
    path: 'cart_items',
    element: <CartItemsIndex/>
  },
  {
    path: '/products/:productId',   // Not 100% sure on this route
    element: <ReviewsIndex/>
  },
  {
    path: '/products/:productId/:reviewsId', // Not 100% sure on this route
    element: <ReviewsIndex/>
  },
  {
    path: '/products/:productId/create_review',
    element: <CreateReview/>
  },
  {
    path: '/products/:productId/edit_review/:reviewId',
    element: <EditReview/>
  },
  {
    path: 'cart_items/checkout',
    element: <Checkout/>
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
