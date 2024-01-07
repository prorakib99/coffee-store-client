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
                element: <Home></Home>
            },
            {
                path: 'addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: 'coffeeDetails',
                element: <ViewCoffee></ViewCoffee>
            },
            {
                path: 'updateCoffee',
                element: <EditCoffee></EditCoffee>
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