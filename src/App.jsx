import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
