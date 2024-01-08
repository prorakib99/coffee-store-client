import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home/Home';
import AddCoffee from '../pages/AddCoffee/AddCoffee';
import ViewCoffee from '../pages/ViewCoffee/ViewCoffee';
import EditCoffee from '../pages/EditCoffee/EditCoffee';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'coffeeDetails/:id',
                element: <ViewCoffee></ViewCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: 'updateCoffee/:id',
                element: <EditCoffee></EditCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;