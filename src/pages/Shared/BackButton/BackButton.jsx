import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <div className="mb-11">
            <Link to='/' className="text-gray-700 text-3xl flex items-center gap-4 font-normal font-['Rancho']">
                <IoIosReturnLeft />
                <span>Back to home</span>
            </Link>
        </div>
    );
};

export default BackButton;