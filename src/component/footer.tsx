import { FaFacebook} from "react-icons/fa";
import { FaInstagram,FaSquareXTwitter } from "react-icons/fa6";
import main from "../asset/main.png";



export default function Footer() {

  return (
    <>
        <footer 
    
    className="flex-col flex-center   
    text-black      pt-6 px-6  mt-12 mb-4">

   <div className="flex-col flex max-w-7xl mx-auto self-start mb-2">
                   
      
        <div className="flex flex-col w-54 ml-20 mb-10 items-start">
   <div className="flex-between  self-start mb-2">
            <img src={main} alt="img" className="h-10 w-10 object-cover  "/>
              <h2 className="font-inter text-3xl font-semibold  text-transparent bg-gradient-to-r from-black to-red-800 bg-clip-text ">BlackBoxPreps</h2>
          </div>
    <span className="font-inter font-normal pl-8  text-xs">Your only prep center for all fulfillment needs.</span>
        {/* Logo / About */}
        </div>
        
    
      <div className="max-w-6xl mx-auto  mb-12   grid grid-cols-1 md:grid-cols-4 items-start p-2 gap-8">

        {/* Links */}
        <div className="flex flex-col  items-center bg-white  p-2 ">
          <h2 className="text-sm font-semibold  px-2 rounded-sm mb-3">Company</h2>
          <ul className="space-y-2 text-sm font-normal">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">AboutUs</a></li>
            <li><a href="#" className="hover:text-blue-400">Get in touch</a></li>
          </ul>
        </div>
        <div className="flex flex-col  items-center bg-white  p-2 ">
          <h2 className="text-sm font-semibold  px-2 rounded-sm mb-3">Information</h2>
          <ul className="space-y-2 text-sm font-normal">
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400">AboutUs</a></li>
            <li><a href="#" className="hover:text-blue-400">Faq</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className=" flex flex-col items-center   p-2 bg-white">
          <h2 className="text-sm  mb-3 font-semibold">Services</h2>
          <ul className="space-y-2 text-sm font-normal">
            <li><a href="#" className="hover:text-blue-400"> Order Fullfillment</a></li>
            <li><a href="#" className="hover:text-blue-400"> FBA</a></li>
           
          </ul>
        </div>
        <div className=" flex flex-col items-center   p-2 bg-white">
          <h2 className="text-sm  mb-3 font-semibold">Contact Us</h2>
          <ul className="space-y-2 text-sm font-normal text-gray-600">
            <li>Darwin first</li>
            <li>Chicago</li>
            <li><a href="#" className="hover:text-blue-400 text-blue-600"> contact@blackboxpreps.com</a></li>
            <li><a href="#" className="hover:text-blue-400 text-gray-600"> (501) 777-2993</a></li>
           
          </ul>
        </div>

        {/* Social */}
 
        </div>
      <div className='    w-full flex-between   bg-white   text-center text-sm'>
        <div className="  text-gray-600 py-4 px-2   text-center">

        © {new Date().getFullYear()} |BlackBoxPreps
        </div>
                  <div className="flex space-x-4 mt-1">
            <a href="#" className="cursor-pointer  "><FaFacebook className="h-6 w-6 text-blue-700"/></a>
            <a href="#" className="cursor-pointer "><FaSquareXTwitter className="h-6 w-6"/></a>
            <a href="#" className="cursor-pointer "><FaInstagram className="h-6 w-6 "/></a>
          </div>

      </div>
      </div>
      
      
      
      {/* Bottom Bar */}
    </footer>
    </>
  );
}
