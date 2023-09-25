import Layouts from '../../Components/Layouts'
import beach from "../../assets/images/beach-4.jpg";
import mal from "../../assets/images/maldives-1.jpg";
import div from "../../assets/images/tour-eiffel-.jpg";
import airport from "../../assets/images/airport.jpg";
import travel from "../../assets/images/panorama-2.jpg";
import city from "../../assets/images/city-1.jpg";

const Travel = () => {
  return (
    <Layouts>
      <div className="mb-3">
        <div className="absolute z-10 mr-16 ml-8 lg:ml-60 my-20 text-white">
          <div className="tracking-[.27em] text-[0.9rem] mb-3 font-bold">OBASANJO TRAVELS & TOURS </div>
          <h3 className="lg:text-[4.5em] text-[2rem] mb-8 font-bold">Exploring the world since 1979</h3>
          <p className="leading-7 mb-8">For more than four decades, we have pioneered agriculture systems in Nigeria that develop grow our industry and community. Our priority is you, our customers and partners. Here is to another forty years in your hearts.</p>
          <div className="px-6 py-2.5 border border-green-800 hover:border-green-700 hover:border-2 hover:scale-125 transition-all translate-1 w-fit text-center">Learn More</div>
        </div>
        <img src={travel} alt="" className="w-screen bg-fowl h-[45rem] brightness-50 object-cover" />
      </div>

      <div className="mt-24">
        <div className="text-center">
          <p className="text-red-600 text-xl italic font-serif">What We Do</p>
          <h1 className="lg:text-5xl text-3xl font-bold">From Local To International</h1>
        </div>
        <div className="text-center lg:ml-16 lg:mr-16 mx-5 mb-12 mt-10">We offer some of the best travel services in the market. For our fellow partners in the Travel industry, we can help to provide comfortability, security and many other services to help enjoy your tour. </div>
      </div>

      <div className="">
        <div className="mb-14 flex items-center justify-center">
          <div className="border-b w-44 px-2 py-2 border-black hover:border-green-700 hover:scale-125 transition-all translate-1"> <div className="text-center text-xl font-semibold uppercase hover:text-green-700">More About Us</div> </div>
        </div>
        <div className="bg-gray-100 w-screen">
          <div className="lg:flex lg:px-36 px-6 gap-10 pt-24">
            <div className="">
              <p className="text-red-600 text-center text-xl italic font-serif">100% safe</p>
              <h1 className="lg:text-5xl text-3xl tracking-wide text-center font-bold">There is only chicken  in our chicken</h1>

              <div className="mb-7 mt-8">
                <div className="flex gap-6"> <p className="lg:leading-7"> <span className="lg:text-2xl text-xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>

              <div className="mb-7">
                <div className="flex gap-6"> <p className="lg:leading-7"> <span className="lg:text-2xl text-xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>

              <div className="mb-7">
                <div className="flex gap-6"> <p className="lg:leading-7"> <span className="lg:text-2xl text-xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>
            </div>
            <div className="mb-10">
              <img src={beach} alt="" className="lg:w-[69rem] mb-5 w-full h-[30rem] lg:h-[35rem]" />
              <div className="lg:flex pb-10 grid md:grid-cols-3 gap-2 items-center justify-center">
                <img src={mal} alt="" className="md:w-[32rem] lg:w-[10rem] lg:h-[10rem] h-[25rem]" />
                <img src={div} alt="" className="w-full md:w-[32rem] lg:w-[10rem] lg:h-[10rem] h-[25rem]" />
                <img src={airport} alt="" className="md:w-[32rem] lg:w-[10rem] lg:h-[10rem] h-[25rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-32">
        <div className="travelimg py-10">
          <div className="text-center py-6 bg-black/30 backdrop-blur-sm">
            <div className="text-red-700 italic text-xl font-serif">Our Products</div>
            <div className="text-4xl font-bold text-white">From fresh whole chicken to frozen cuts</div>
            <p className="mt-5 text-white">We have your perfect protein. Our selection of premium cuts and all-time <br /> favourites that are sure to please you and your household. </p>
            <div className="mt-10 pb-10 flex items-center justify-center">
              <div className="border text-white w-60 px-2 py-3 border-white hover:border-white hover:scale-110 transition-all translate-1"> <div className="text-center text-xl font-semibold uppercase hover:text-white">View Our Products</div> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 w-11/12 mx-auto">
        <div className="text-center">
          <p className="text-red-700 italic text-xl font-serif">Why Our Products Are Good</p>
          <h1 className="text-5xl mb-10 font-semibold">Grown without compromise</h1>
          <p className="leading-8 tracking-wide text-gray-600">Our commitment is to your health and satisfaction. Our poultry is fed on an entirely vegetarian diet, <br /> free of hormones, additives and meat by-products. We’re only a success if you’re completely <br /> pleased. If you are unhappy with any of our products, let us know.</p>
          <div className="mt-16 flex items-center justify-center">
            <div className="border w-44 px-2 py-3 border-gray-600 text-gray-600 hover:border-green-700 hover:scale-110 transition-all translate-1"> <div className="text-center  font-bold hover:text-green-700">Contact Us</div> </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-screen">
        <div className="lg:flex items-center justify-between ml-20 mr-20 pt-24">
          <div className="">
            <p className="text-red-600 text-center text-xl italic font-serif">We Are Pioneers</p>
            <h1 className="lg:text-5xl text-3xl tracking-wide text-center font-bold">A travel legacy</h1>
            <div className="mb-7 mt-8">
              <div className="leading-8 tracking-wide">From simple beginnings in Ota to becoming one of Nigeria’s foremost <br /> farms in the agric sector, our journey in the industry hasn’t always been <br /> easy. But, like our founder, Chief Olusegun Obasanjo we have been tough <br /> and resilient. In the face of economic and political challenges, our triumphs <br /> have always surpassed our challenges. And they continue to inspire us as <br /> we embrace the challenges and responsibilities of feeding an evolving Africa.</div>
              <br />
            </div>
          </div>
          <div className="pb-10"> <img src={city} alt="" className="h-[32rem] w-[29rem]" /> </div>
        </div>
      </div>
    </Layouts>
  )
}

export default Travel
