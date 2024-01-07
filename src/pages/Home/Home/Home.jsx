import { Link } from 'react-router-dom';
import HeroBg from '../../../assets/images/more/3.png'
import FeatureIconOne from '../../../assets/images/icons/1.png'
import FeatureIconTwo from '../../../assets/images/icons/2.png'
import FeatureIconThree from '../../../assets/images/icons/3.png'
import FeatureIconFour from '../../../assets/images/icons/4.png'
const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div style={{ backgroundImage: `url(${HeroBg})` }} className='bg-cover bg-center'>
                <div className="container mx-auto px-8">
                    <div className='py-16 lg:py-48 flex lg:w-1/2 mx-auto justify-center flex-col text-center items-center'>
                        <h1 className="text-white text-5xl lg:text-[55px] font-normal font-['Rancho']">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-white text-base font-normal mt-4 mb-8 font-['Raleway'] leading-[30px]">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                        <Link to='/addCoffee' className="px-5 py-1 duration-300 border-2 border-transparent hover:text-white hover:border-white hover:bg-transparent bg-orange-300 text-neutral-800 text-2xl font-normal font-['Rancho']">Add Coffee</Link>
                    </div>
                </div>
            </div>

            <div className='bg-stone-200'>
                <div className='container mx-auto px-8'>
                    <div className='grid lg:grid-cols-4 gap-8 py-10 justify-between items-center'>
                        <div className='text-center'>
                            <img src={FeatureIconFour} className='mx-auto mb-3' alt="Coffee Feature Image" />
                            <h5 className="text-stone-800 text-[35px] mb-1 font-normal font-['Rancho']">Awesome Aroma</h5>
                            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className='text-center'>
                            <img src={FeatureIconOne} className='mx-auto mb-3' alt="Coffee Feature Image" />
                            <h5 className="text-stone-800 text-[35px] mb-1 font-normal font-['Rancho']">High Quality</h5>
                            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">We served the coffee to you maintaining the best quality</p>
                        </div>
                        <div className='text-center'>
                            <img src={FeatureIconTwo} className='mx-auto mb-3' alt="Coffee Feature Image" />
                            <h5 className="text-stone-800 text-[35px] mb-1 font-normal font-['Rancho']">Pure Grades</h5>
                            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        <div className='text-center'>
                            <img src={FeatureIconThree} className='mx-auto mb-3' alt="Coffee Feature Image" />
                            <h5 className="text-stone-800 text-[35px] mb-1 font-normal font-['Rancho']">Proper Roasting</h5>
                            <p className="text-stone-900 text-base font-normal font-['Raleway'] leading-relaxed">Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;