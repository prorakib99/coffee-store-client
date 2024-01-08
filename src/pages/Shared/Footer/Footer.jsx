import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/images/more/logo1.png';
import CopyRightBg from '../../../assets/images/more/24.jpg';
import footerBg from '../../../assets/images/more/13.jpg';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${footerBg})` }} className="w-full pt-12 pb-10 bg-cover bg-center">
                <div className='container mx-auto px-8'>
                    <Link to="/" className='block mb-4'>
                        <img className='h-16' src={footerLogo} alt="" />
                    </Link>
                    <div className='lg:grid lg:grid-cols-[7fr_5fr] flex flex-col-reverse gap-10 justify-between'>
                        <div>
                            <h3 className="text-stone-800 text-[45px] text-shadow font-normal font-['Rancho']">Espresso Emporium</h3>
                            <p className="text-stone-900 text-xl font-normal font-['Raleway'] leading-9">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className="mt-8 mb-6">
                                <ul className='flex gap-4'>
                                    <li><Link to='/'><FaFacebook className='text-2xl text-[#331A15]' /></Link></li>
                                    <li><Link to='/'><FaTwitter className='text-2xl text-[#331A15]' /></Link></li>
                                    <li><Link to='/'><FaInstagram className='text-2xl text-[#331A15]' /></Link></li>
                                    <li><Link to='/'><FaLinkedin className='text-2xl text-[#331A15]' /></Link></li>
                                </ul>
                            </div>
                            <p className="text-stone-800 text-[45px] text-shadow drop-shadow-2xl font-normal font-['Rancho']">Get in Touch</p>
                            <div className=''>
                                <p className="text-stone-900 flex gap-4 items-center text-xl font-normal font-['Raleway'] leading-9"><BsTelephoneFill /> <span>+88 01500 000 000</span></p>
                                <p className="text-stone-900 flex gap-4 items-center text-xl font-normal font-['Raleway'] leading-9"><MdEmail /> <span>info@gmail.com</span></p>
                                <p className="text-stone-900 flex gap-4 items-center text-xl font-normal font-['Raleway'] leading-9"><IoLocationSharp /> <span>72, Wall street, King Road, Dhaka</span></p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-stone-800 text-[45px] text-shadow font-normal font-['Rancho']">Connect with Us</h3>
                            <form>
                                <input type='text' name='name' className="w-full h-12 mb-4 bg-white rounded-[5px] focus:border border-gray-300 focus:outline-none focus:border-orange-300" placeholder='Name' />
                                <input type='email' name='email' className="w-full h-12 mb-4 bg-white rounded-[5px] focus:border border-gray-300 focus:outline-none focus:border-orange-300" placeholder='Email' />
                                <textarea name='message' className="w-full mb-4 bg-white rounded-[5px] focus:border focus:outline-none border-gray-300 focus:border-orange-300" rows={5} placeholder='Message' />
                                <input type="submit" value="Send Message" className="w-[150px] text-stone-800 text-2xl font-normal font-['Rancho'] cursor-pointer h-12 rounded-[30px] border-2 border-stone-800" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${CopyRightBg})` }} >
                <div className='container mx-auto px-8'>
                    <p className="text-white text-xl py-3 text-center font-normal font-['Rancho']">Copyright Coffee Store ! All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;