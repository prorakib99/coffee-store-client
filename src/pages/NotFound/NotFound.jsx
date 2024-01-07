import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { IoIosReturnLeft } from "react-icons/io";
import NotFoundImg from '../../assets/images/404/404.gif'

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-8">
                <div className="flex justify-center pt-8 lg:pt-16 items-center flex-col">
                    <div className="mb-11">
                        <Link to='/' className="text-gray-700 text-3xl flex items-center gap-4 font-normal font-['Rancho']">
                            <IoIosReturnLeft />
                            <span>Back to home</span>
                        </Link>

                    </div>
                    <div className="">
                        <Link>
                            <img src={NotFoundImg} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;