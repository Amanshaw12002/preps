import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram,FaSquareXTwitter } from "react-icons/fa6";
import main from "../asset/main.png";



export default function Footer() {

  return (
    <>
        <footer 
    
    className="flex flex-col items-center justify-center h-fit md:h-[60vh]  w-screen border-2 border-gray-700 
      text-black      py-10 px-6 ">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4  p-2 gap-8">
        
        {/* Logo / About */}
        <div>
          <div className="flex-between w-1/6">
            <img src={main} alt="img" className="h-8 w-8 object-cover "/>
              <h2 className="font-mon text-2xl  text-red-900">BlackBoxPreps</h2>
          </div>
          <p className="text-xs text-gray-800  mt-3">
            We provide the best services to make your life easier. 
            Trusted by thousands of happy customers worldwide.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center border-l">
          <h2 className="text-lg font-light  mb-3">Company</h2>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">AboutUs</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">ContactUs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className=" flex flex-col items-center font-light border-l">
          <h2 className="text-lg  mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400"> Order Fullfillment</a></li>
           
          </ul>
        </div>

        {/* Social */}
        <div className=" flex flex-col items-center border-l">
          <h2 className="text-lg font-semibold  mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookSquare/></a>
            <a href="#" className="hover:text-blue-400"><FaSquareXTwitter/></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram/></a>
          </div>
         
        </div>
      </div>
      {/* Bottom Bar */}
      <div className={` absolute bottom-4  w-full flex items-center  justify-center  border-t-1 border-gray-500   text-center text-sm`}>
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
    </>
  );
}
