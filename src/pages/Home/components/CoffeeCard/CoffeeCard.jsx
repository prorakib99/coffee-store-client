import { FaEye } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const CoffeeCard = () => {
    return (
        <>
        
            <div className="grid md:flex justify-center items-center gap-4 lg:gap-8 py-6 lg:py-9 pl-4 lg:pr-16 bg-stone-200 bg-opacity-70 rounded-[10px]">
                <img src='https://i.postimg.cc/cLkzxdL3/1.png' alt="" />
                <div className="grid gap-3 flex-1">
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 font-normal">Americano Coffee</span>
                    </p>
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 font-normal">Mr. Matin Paul</span>
                    </p>
                    <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 font-normal">890 Taka</span>
                    </p>
                </div>
                <div className="flex lg:flex-col my-6 lg:my-0 gap-6">
                    <button className="bg-[#D2B48C] rounded-[5px] text-white p-2">
                        <FaEye className="text-2xl" />
                    </button>
                    <button className="bg-neutral-700 rounded-[5px] text-white p-2">
                        <MdModeEditOutline className="text-2xl" />
                    </button>
                    <button className="bg-red-500 rounded-[5px] text-white p-2">
                        <MdDelete className="text-2xl" />
                    </button>
                </div>
            </div>
           
        </>

    );
};

export default CoffeeCard;