import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NotFoundImg from '../../assets/images/404/404.gif'
import BackButton from "../Shared/BackButton/BackButton";

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className="container mx-auto px-8">
                <div className="flex justify-center pt-8 lg:pt-16 items-center flex-col">
                   <BackButton></BackButton>
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