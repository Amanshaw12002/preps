import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram,FaSquareXTwitter } from "react-icons/fa6";
import main from "../asset/main.png";



export default function Footer() {

  return (
    <>
        <footer 
    
    className="flex flex-col items-center justify-center   max-w-screen  
      text-black      py-10 px-6 bg-gray-100 ">
          <div className="flex-between mb-4  ">
            <img src={main} alt="img" className="h-10 w-10 object-cover  "/>
              <h2 className="font-mon text-4xl font-semibold  text-red-900">BlackBoxPreps</h2>
          </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3  p-2 gap-8">
        
        {/* Logo / About */}

        {/* Links */}
        <div className="flex flex-col w-52 items-center bg-white rounded-sm p-4 border border-gray-400">
          <h2 className="text-lg font-light  mb-3">Company</h2>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">AboutUs</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">ContactUs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className=" flex flex-col items-center border border-gray-400 font-light rounded-sm p-2 bg-white">
          <h2 className="text-lg  mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400"> Order Fullfillment</a></li>
           
          </ul>
        </div>

        {/* Social */}
        <div className=" flex flex-col items-center border border-gray-400 rounded-sm bg-white p-2">
          <h2 className="text-xl font-inter  mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 "><FaFacebookSquare className="h-8 w-8"/></a>
            <a href="#" className="hover:text-blue-400"><FaSquareXTwitter className="h-8 w-8"/></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram className="h-8 w-8"/></a>
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
