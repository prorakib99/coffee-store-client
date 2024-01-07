const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: NotFound } = require("../pages/NotFound/NotFound");
const { default: Home } = require("../pages/Home/Home/Home");
const { default: AddCoffee } = require("../pages/AddCoffee/AddCoffee");
const { default: ViewCoffee } = require("../pages/ViewCoffee/ViewCoffee");
const { default: EditCoffee } = require("../pages/EditCoffee/EditCoffee");
const { default: Login } = require("../pages/Login/Login");
const { default: Register } = require("../pages/Register/Register");

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