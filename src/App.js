import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './components/MainPage';
import RouteP from './components/RoutePage';
import Roo from './components/Roots'
import styles from './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roo />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/route',
        element: <RouteP />
      },

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;