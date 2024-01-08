import { useLoaderData } from "react-router-dom";
import BackButton from "../Shared/BackButton/BackButton";

const ViewCoffee = () => {
    const coffee = useLoaderData()

    const {name, chef, price, supplier, taste, category, details, photo} = coffee;

    return (
        <div className="py-10">
            <div className="container mx-auto px-8">
                <BackButton></BackButton>
                <div className="bg-stone-100 px-10 lg:px-20 py-12 grid lg:grid-cols-2 justify-center gap-8 lg:gap-16 items-center rounded-[5px] w-full">
                    <img className="mx-auto lg:w-1/2 h-full" src={photo} alt="" />
                    <div>
                        <h3 className="text-stone-800 text-4xl mb-5 font-normal font-['Rancho']">{name}</h3>
                        <div className="grid gap-3 flex-1">
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Price: <span className="text-zinc-600 font-normal">{price} Taka</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 font-normal">{chef}</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Supplier: <span className="text-zinc-600 font-normal">{supplier}</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Taste: <span className="text-zinc-600 font-normal">{taste}</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Category: <span className="text-zinc-600 font-normal">{category}</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Details: <span className="text-zinc-600 font-normal">{details}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;