import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import UserList from './pages/UserList/UserList';
import Home from './pages/Home/Home';
import UserEdit from './pages/UserEdit/UserEdit';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import NewProduct from './pages/NewProduct/NewProduct';

// Define routes using the modern Data Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Replaces path: '/'
        element: <Home />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'newUser',
        element: <NewUser />,
      },
      {
        path: 'user/:userId',
        element: <UserEdit />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'newProduct',
        element: <NewProduct />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

