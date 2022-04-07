import React from "react";
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Route,Routes,useParams} from "react-router-dom";
import Header from "./components/header/header.component";


function App() {
  return (
    <div>
    <Header/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
     </Routes>
    </div>
  );
}



export default App;
