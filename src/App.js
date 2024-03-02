
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },

]

)
function App() {
  return (
    <RouterProvider router={router}/>
    // <div className="text-4xl font-bold">
    //   Hello Everyone
    // </div>
  );
}


export default App;
