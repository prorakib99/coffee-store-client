import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <div className="mb-11">
            <Link to='/' className="text-gray-700 w-48 rounded-lg duration-300 hover:text-white hover:bg-[#D2B48C] text-3xl flex items-center gap-4 font-normal font-['Rancho']">
                <IoIosReturnLeft />
                <span>Back to home</span>
            </Link>
        </div>
    );
};

export default BackButton;