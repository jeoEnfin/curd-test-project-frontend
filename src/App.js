import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Roots';
import AddBook from './pages/AddBook';
import Auth from './pages/Auth';

function App() {

 const router = createBrowserRouter([
  {
    path:'/login',
    element: <Auth />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addbook',
        element : <AddBook />
      }
    ]
  }
 ])



  return (
    <RouterProvider router={router} />
  );
}

export default App;
