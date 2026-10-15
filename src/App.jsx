import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ShopProducts from './Components/Shop/ShopProducts';
import Brands from './Components/Brands/Brands';
import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';
import CollectionList from './Components/Categories/Categories';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import AuthContextProvider from './Context/AuthContext/AuthProvider';
import { Toaster } from './Components/ui/sonner';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CheckoutPage from './Components/PaymentPages/CheckOut';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FeaturedProducts } from './Components/LandingPage/FeaturedProducts';
import CartContextProvider from './Context/CartContext/CartProvider';
import { store } from './Redux/CartStore.js'
import { Provider } from 'react-redux'
import RedirectIfAuthenticated from './Components/RedirectIfAuthenticated/RedirectIfAuthenticated';

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <LandingPage /> },
      { path: 'products', element: <ProtectedRoute><ShopProducts /></ProtectedRoute> },
      { path: 'featureProduct', element: <ProtectedRoute><FeaturedProducts /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><CollectionList /></ProtectedRoute> },
      { path: 'productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><ConfirmationPage /></ProtectedRoute> },
      { path: 'checkOut', element: <ProtectedRoute><CheckoutPage /></ProtectedRoute> },
      { path: 'register', element: <RedirectIfAuthenticated><Register /></RedirectIfAuthenticated> },
      { path: 'login', element: <RedirectIfAuthenticated><Login /> </RedirectIfAuthenticated> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);
const reactQueryConfig = new QueryClient();
export default function App() {
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={reactQueryConfig}>
          <CartContextProvider>
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
            <Toaster />
          </CartContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  )
}
