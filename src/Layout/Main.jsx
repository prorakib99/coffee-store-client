import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;