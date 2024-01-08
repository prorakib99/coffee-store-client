import { FaEye } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
    
    const { _id, name, price, chef, photo } = coffee;

    return (
        <>

            <div className="grid md:flex justify-center items-center gap-4 lg:gap-8 py-6 lg:py-9 lg:px-10 bg-stone-200 bg-opacity-70 rounded-[10px]">
                <div className="lg:w-1/3">
                    <img className="mx-auto" src={photo} alt="" />
                </div>
                <div className="grid gap-3 flex-1">
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 font-normal">{name}</span>
                    </p>
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 font-normal">{chef}</span>
                    </p>
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 font-normal">{price} Taka</span>
                    </p>
                </div>
                <div className="flex lg:flex-col justify-center my-6 lg:my-0 gap-6">
                    <Link to={`/coffeeDetails/${_id}`}>
                        <button className="bg-[#D2B48C] rounded-[5px] text-white p-2">
                            <FaEye className="text-2xl" />
                        </button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="bg-neutral-700 rounded-[5px] text-white p-2">
                            <MdModeEditOutline className="text-2xl" />
                        </button>
                    </Link>
                    <button className="bg-red-500 rounded-[5px] text-white p-2">
                        <MdDelete className="text-2xl" />
                    </button>
                </div>
            </div>

        </>

    );
};

export default CoffeeCard;