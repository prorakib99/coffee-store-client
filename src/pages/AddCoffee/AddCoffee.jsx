
import toast from "react-hot-toast";
import BackButton from "../Shared/BackButton/BackButton";

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const loading = toast.loading('Creating Coffee');
        () => loading;

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, price, chef, supplier, taste, category, details, photo}

        fetch('https://coffee-store-server-five-olive.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.dismiss(loading);
                toast.success('Coffee Add Successful!');
                form.reset();
            }
            else{
                toast.dismiss(loading);
                toast.error("Couldn't add Coffee")
            }
        })

    }

    return (
        <div className="py-11">
            <div className="container mx-auto px-8">
                <BackButton></BackButton>
                <div className="bg-stone-100 rounded-[5px] py-10 px-12 lg:py-12 lg:pb-14 lg:px-20">
                    <div className="text-center lg:w-3/4 mx-auto">
                        <h2 className="text-gray-700 text-[45px] mb-2 font-normal text-shadow font-['Rancho']">Add New Coffee</h2>
                        <p className="text-center text-stone-900 text-opacity-70 text-lg font-normal font-['Raleway'] leading-[30px]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleAddCoffee} className="grid lg:grid-cols-2 mt-8 gap-8">
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Name</label>
                            <input type="text" name="name" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee Name" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Price</label>
                            <input type="text" name="price" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee Price" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Chef</label>
                            <input type="text" name="chef" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee chef" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Supplier</label>
                            <input type="text" name="supplier" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee supplier" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Taste</label>
                            <input type="text" name="taste" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee taste" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Category</label>
                            <input type="text" name="category" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee category" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Details</label>
                            <input type="text" name="details" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter coffee details" required />
                        </div>
                        <div className="w-full">
                            <label className="text-stone-900 text-opacity-80 text-xl font-semibold font-['Raleway'] leading-[30px]">Photo</label>
                            <input type="text" name="photo" className="w-full mt-3 border-none focus:border bg-white rounded-[5px]"  placeholder="Enter photo URL" required />
                        </div>
                        <input type="submit" className="bg-[#D2B48C] py-1 mt-3 lg:col-span-2 rounded-[5px] border-2 border-stone-800 text-center cursor-pointer hover:bg-transparent duration-300 text-stone-800 text-2xl font-normal font-['Rancho']" value="Add Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;