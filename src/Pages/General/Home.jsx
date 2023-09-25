import { useState } from 'react';
import Footer from '../../Components/Footer';
import fowl from "../../assets/images/consult.jpg";
import { FaBan, FaFirstAid, FaGraduationCap } from 'react-icons/fa';
import logo from "../../assets/images/lagoslogo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdAgriculture } from 'react-icons/md';
import { SiYourtraveldottv } from 'react-icons/si';


import { Link } from 'react-router-dom';

const links = [
  {
    title: 'agriculture',
    url: '/'
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

const Home = () => {

  const Iconcs = 'w-fit bg-green-700 rounded-full py-2 px-2 flex items-center m-3 justify-center';
  const [show, setShow] = useState(false)

  return (
    <div className="">
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

        <div className="lg:flex hidden">
          <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoFacebook /> </Link> </div>
          <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoTwitter /> </Link> </div>
          <div className={`${Iconcs}`}> <Link to='' className='text-white text-xl'> <BiLogoInstagram /> </Link> </div>
        </div>
        <div className="lg:hidden"> <FaBars onClick={() => setShow(!show)} className='text-3xl cursor-pointer' /> </div>
      </div>
      <div className="mb-3">
        <div className="absolute z-10 mr-16 ml-8 lg:ml-60 my-20 text-white">
          <div className="tracking-[.27em] text-[0.9rem] mb-3 font-bold">OBASANJO FARMS OTA</div>
          <h3 className="lg:text-[4.5em] text-[2rem] mb-8 font-bold">Feeding Nigeria since 1979</h3>
          <p className="leading-7 mb-8">For more than four decades, we have pioneered agriculture systems in Nigeria that develop grow our industry and community. Our priority is you, our customers and partners. Here is to another forty years in your hearts.</p>
          <div className="px-6 py-2.5 border border-green-800 hover:border-green-700 hover:border-2 hover:scale-125 transition-all translate-1 w-fit text-center">Learn More</div>
        </div>
        <img src={fowl} alt="" className="w-screen bg-fowl h-[45rem] brightness-50 object-cover" />
      </div>

      <div className="mt-24 w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-red-600 text-xl italic font-serif">What We Do</p>
        </div>
        <div className="lg:flex items-center justify-center grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10">
          <div className=" flex items-center justify-center md:grid-cols-5 gap-5 mt-10">
            <div className="w-32 h-32 bg-white shadow-2xl rounded-lg ">
              <div className="text-center my-8">
                <Link to='/education' className="flex items-center justify-center "> <FaGraduationCap className='text-center text-5xl' /> </Link>
                <div className="">Education</div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center md:grid-cols-5 gap-5 mt-10">
            <div className="w-32 h-32 bg-white shadow-2xl rounded-lg ">
              <div className="text-center my-8">
                <Link to='/medical' className="flex items-center justify-center "> <FaFirstAid className='text-center text-5xl' /> </Link>
                <div className="">Medical</div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center md:grid-cols-5 gap-5 mt-10">
            <div className="w-32 h-32 bg-white shadow-2xl rounded-lg ">
              <div className="text-center my-8">
                <Link to='/agric' className="flex items-center justify-center "> <MdAgriculture className='text-center text-5xl' /> </Link>
                <div className="">Agriculture</div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center md:grid-cols-5 gap-5 mt-10">
            <div className="w-32 h-32 bg-white shadow-2xl rounded-lg ">
              <div className="text-center my-8">
                <Link to='/travel' className="flex items-center justify-center "> <SiYourtraveldottv className='text-center text-5xl' /> </Link>
                <div className="">Travel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center lg:ml-16 lg:mr-16 mx-5 mb-12 mt-16"> </div>
      </div>

      <div className="">
        <div className="bg-gray-100 w-screen">
          <div className=" flex items-center pt-10 justify-center">
            <div className="border-b w px-2 py-2 border-black hover:border-green-700 hover:scale-125 transition-all translate-1"> <div className="text-center text-xl font-semibold uppercase hover:text-green-700">More About Us</div> </div>
          </div>
          <div className="lg:flex lg:px-36 pt-6">
            <div className="">
              <p className="text-center text-xl italic font-serif">
                Welcome to [Your Consultant Business Name], where expertise meets innovation to drive your success. We are a team of dedicated professionals passionate about helping businesses and individuals achieve their goals and realize their full potential.
              </p>
              <h1 className="lg:text-5xl text-3xl tracking-wide text-center font-bold"></h1>

              <div className="mb-7 mt-8">
                <div className="flex gap-6"> <p className="lg:leading-7"> <span className="lg:text-2xl text-xl leading-10">Our Mission</span> <br />
                  At [Your Consultant Business Name], our mission is simple yet profound: to empower our clients with the knowledge, strategies, and tools they need to thrive in today's dynamic and competitive landscape. We believe that every challenge presents an opportunity, and our commitment is to turn those challenges into stepping stones toward success. </p> </div>
              </div>

              <div className="mb-7">
                <div className="flex gap-6"> <p className="lg:leading-7"> <span className="lg:text-2xl text-xl leading-10">Our Approach</span> <br />
                  What sets us apart is our holistic and client-centric approach. We understand that each client is unique, with distinct needs, goals, and aspirations. That's why we tailor our services to meet your specific requirements, whether you're a small business looking to grow, an individual seeking personal development, or a corporation aiming to innovate and adapt. </p> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:flex items-center justify-between w-11/12 mx-auto pt-24">
          <div className="">
            <p className="text-red-600 text-center text-xl italic font-serif">We Are Pioneers</p>
            <div className="mb-7 mt-2"><br />
              <div className="leading-8 tracking-wide text-center">As we continue to grow, we’re embracing our responsibility to drive  positive change, solve problems, and make the world a little better every day.  Learn about the values that are key to who we are.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
