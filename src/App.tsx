import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Pricing from './page/Pricing'
import Navbar from "@/component/Navbar";
import Footer from './component/footer';
import Contact from './page/Contact';
import AboutUs from './page/AboutUs';
import FbaService from './page/ServicesForFba';
import FbmService from './page/ServicesForFbm';


function App() {
 return (
  <>
  <main className='  '>
       <Navbar/>
        <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/aboutUs" element={<AboutUs/>}/>
       <Route path='/service/fba' element={<FbaService/>}/>
       <Route path='/service/fbm' element={<FbmService/>}/>
        </Routes>
        <Footer/>
        
  </main>
  </>
 )
}

export default App
