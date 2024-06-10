
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Main from './Layout/Main.jsx';
import Deposite from './Pages/Deposite/Deposite.jsx'
import Cashout from './Pages/Cashout/Cashout.jsx'
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import UserRouter from './Router/UserRouter.jsx';
import Plan from './Pages/Plan/Plan.jsx';




function App() {

   
  const router = createBrowserRouter([
  
   {
      path: '/',
      element: <Main></Main>,
      children : [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/deposite',
          element: <UserRouter><Deposite></Deposite></UserRouter>
        },
        {
          path: '/cashout',
          element: <UserRouter><Cashout></Cashout></UserRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/plan',
          element: <Plan></Plan>
        },
      ]
   }
  
  ])
 
   return (
     <div >
       <RouterProvider router={router} > </RouterProvider>
       
     </div>
   );
 }

export default App;
