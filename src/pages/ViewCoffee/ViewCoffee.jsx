import BackButton from "../Shared/BackButton/BackButton";

const ViewCoffee = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto px-8">
                <BackButton></BackButton>
                <div className="bg-stone-100 px-10 lg:px-20 py-12 flex flex-wrap justify-center lg:gap-40 items-center rounded-[5px] w-full">
                    <img className="lg:h-96" src='https://i.postimg.cc/cLkzxdL3/1.png' alt="" />
                    <div>
                        <h3 className="text-stone-800 text-4xl mb-5 font-normal font-['Rancho']">Niceties</h3>
                        <div className="grid gap-3 flex-1">
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Name: <span className="text-zinc-600 font-normal">Americano Coffee</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Chef: <span className="text-zinc-600 font-normal">Mr. Matin Paul</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Supplier: <span className="text-zinc-600 font-normal">Cappu Authorizer</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Taste: <span className="text-zinc-600 font-normal">Sweet and hot</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Category: <span className="text-zinc-600 font-normal">Americano</span>
                            </p>
                            <p className="text-stone-900 text-xl font-semibold font-['Raleway']">Details: <span className="text-zinc-600 font-normal">Espresso with hot water</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;