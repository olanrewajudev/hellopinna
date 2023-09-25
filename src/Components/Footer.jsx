import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
    const Iconcs = 'w-fit bg-gray-300 rounded-full py-1 px-1 flex items-center m-3 justify-center';
    return (
        <div>
            <div className="bg-gray-100 py-16 h-[20rem] mt-10">
                <div className="flex items-center mx-20 justify-between">
                    <Link to='/' className="">Homepage</Link>
                    <div className="">+234 incoming</div>
                </div>
                <div className="border mx-5 mt-10"></div>

                <div className="lg:flex items-center mt-6 mx-20 justify-between">
                    <div className="">© 2020 All rights Reserved. Obasanjo Farms Nigeria</div>
                    <div className="flex ">
                        <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoFacebook /> </Link> </div>
                        <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoTwitter /> </Link> </div>
                        <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoInstagram /> </Link> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
