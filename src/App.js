import React from "react";
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Route,Routes,useParams} from "react-router-dom";


function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
     </Routes>
    </div>
  );
}



export default App;
