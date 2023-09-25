import logo from "../assets/images/lagoslogo.png";
import { Link } from 'react-router-dom'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

const links = [
    {
        title: 'home',
        url: '/'
    },
    {
        title: 'agriculture',
        url: '/agric'
    },
    {
        title: 'medical',
        url: '/medical'
    },
    {
        title: 'education',
        url: '/education'
    },
    {
        title: 'travel',
        url: '/travel'
    },
]

const Header = () => {
    const Iconcs = 'w-fit bg-green-700 rounded-full py-2 px-2 flex items-center m-3 justify-center';
    const [show, setShow] = useState(false) 

    return (
        <div>
            {show && <div className="fixed top-0 left-0 w-screen z-20 p-4 bg-white">
                <div onClick={() => setShow(!show)} className="flex items-center justify-end cursor-pointer p-3 bg-slate-50 w-fit ml-auto mr-10 rounded-lg shadow-xl">
                    <FaTimes />
                </div>
                <div className="flex flex-col items-start w-11/12 mx-auto mt-5">
                    {links.map((item, i) => (
                        <Link key={i} to={`${item.url}`} className=" font-semibold hover:bg-slate-50 w-full text-xl py-3 capitalize px-2">{item.title}</Link>
                    ))}
                </div>
            </div>}

            <div className="flex items-center gap-8 justify-between mx-20 py-6">
                <Link to='/' className=""> <img src={logo} alt="" className="w-[10rem]" /> </Link>
                <div className="lg:flex items-center hidden">
                    {links.map((item, i) => (
                        <Link key={i} to={`${item.url}`} className=" font-semibold text-xl px-2">{item.title}</Link>
                    ))}
                </div>
                <div className="lg:flex hidden">
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoFacebook /> </Link> </div>
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoTwitter /> </Link> </div>
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoInstagram /> </Link> </div>
                </div>
                <div className="lg:hidden"> <FaBars onClick={() => setShow(!show)} className='text-3xl cursor-pointer' /> </div>
            </div>
        </div>
    )
}

export default Header
