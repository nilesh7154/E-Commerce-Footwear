import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import ProductDesc from "./Component/ProductDesc/ProductDesc";
// import createStore from "./Component/Context/createStore";
import ProviderFunction from "./Component/Context/ProviderFunction";
import Men from "./Component/Home/Category/Men";
import Women from "./Component/Home/Category/Women";
import NewArrival from "./Component/Home/Category/NewArrival";
import Sale from "./Component/Home/Category/Sale";
import Kids from "./Component/Home/Category/Kids";
import Trending from "./Component/Home/Category/Trending";
import Addtocart from "./Component/AddCart/Addtocart";
// import Contact from "./Component/Contact/Contact";
// import Footer from "./Component/Footer/Footer";
// import FAQ from "./Component/F&Q/F&Q";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ProviderFunction>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home showImage={true} />} />
            <Route path="/addcart" element={<Addtocart />} />
            <Route path="/product" element={<Product />} />
            {/* <Route path="/contact" element={<Contact/>}/> */}
            <Route path="/product/productdesc/:id" element={<ProductDesc />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/new" element={<NewArrival />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/trending" element={<Trending />} />
            {/* <Route path="/footer" element={<Footer/>}/> */}
            {/* <Route path="/faq" element={<FAQ/>}/> */}
          </Routes>
        </ProviderFunction>
      </div>
    </BrowserRouter>
  );
}

export default App;
