import { Link } from 'react-router-dom';
import HeroBg from '../../../assets/images/more/3.png'
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${HeroBg})`}} className='bg-cover bg-center'>
            <div className="container mx-auto px-8">
                <div className='py-16 lg:py-48 flex lg:w-1/2 mx-auto justify-center flex-col text-center items-center'>
                <h1 className="text-white text-5xl lg:text-[55px] font-normal font-['Rancho']">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-white text-base font-normal mt-4 mb-8 font-['Raleway'] leading-[30px]">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                
                <Link to='/addCoffee' className="px-4 py-1 bg-orange-300 text-neutral-800 text-2xl font-normal font-['Rancho']">Add Coffee</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;