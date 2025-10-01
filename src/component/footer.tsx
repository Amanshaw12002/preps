import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram,FaSquareXTwitter } from "react-icons/fa6";
import main from "../asset/main.png";



export default function Footer() {

  return (
    <>
        <footer 
    
    className="flex flex-col items-center justify-center   max-w-screen  
    text-black      pt-6 px-6  mt-12 mb-4">

                   
      
      <div className="max-w-4xl bg-white mb-12 rounded-2xl mx-auto grid grid-cols-1 md:grid-cols-4 items-start p-2 gap-8">
        
    
        {/* Logo / About */}
        <div className="flex flex-col items-start">

   <div className="flex-between  self-start mb-2">
            <img src={main} alt="img" className="h-10 w-10 object-cover  "/>
              <h2 className="font-inter text-2xl font-semibold  text-transparent bg-gradient-to-r from-black to-red-800 bg-clip-text ">BlackBoxPreps</h2>
          </div>
    <span className="font-inter font-normal  text-sm">Your only prep center for all fulfillment needs.</span>
        </div>
        {/* Links */}
        <div className="flex flex-col w-52 items-center bg-white  p-2 ">
          <h2 className="text-lg font-normal  mb-3">Company</h2>
          <ul className="space-y-2 text-sm font-normal">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">AboutUs</a></li>
            <li><a href="#" className="hover:text-blue-400">ContactUs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className=" flex flex-col items-center   p-2 bg-white">
          <h2 className="text-lg  mb-3 font-normal">Services</h2>
          <ul className="space-y-2 text-sm font-normal">
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400"> Order Fullfillment</a></li>
           
          </ul>
        </div>

        {/* Social */}
  <div className=" flex flex-col items-start  bg-white p-2 ml-6">
                  <span className="font-inter text-md mb-2">Connect with us</span>
          <div className="flex space-x-4 mt-1">
            <a href="#" className="hover:text-blue-700 "><FaFacebookSquare className="h-6 w-6 text-blue-700"/></a>
            <a href="#" className="hover:text-black"><FaSquareXTwitter className="h-6 w-6"/></a>
            <a href="#" className="hover:text-red-800"><FaInstagram className="h-6 w-6 "/></a>
          </div>
         
        </div>
      </div>
      {/* Bottom Bar */}
      <div className={`    w-full flex items-center  justify-center   bg-white   text-center text-sm`}>
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
    </>
  );
}
