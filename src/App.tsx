import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Pricing from './page/Pricing'
import Navbar from "@/component/Navbar";
import Footer from './component/footer';
import AboutUs from './page/AboutUs';
import FbaService from './page/ServicesForFba';
import FbmService from './page/ServicesForFbm';
import FAQ from './page/FAQ';
import GetQuoteForm from './component/GetQuote';
import ScrollToTop from './component/ScrollToTop';


function App() {
 return (
  <>
  <main className=' relative space-b-6 bg-slate-600/10 '>
       <Navbar/>
         <ScrollToTop />
        <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/quote" element={<GetQuoteForm/>}/>
       <Route path="/aboutUs" element={<AboutUs/>}/>
       <Route path="/faq" element={<FAQ/>}/>
       <Route path='/service/fba' element={<FbaService/>}/>
       <Route path='/service/fbm' element={<FbmService/>}/>
        </Routes>
        <Footer/>
        
  </main>
  </>
 )
}

export default App
