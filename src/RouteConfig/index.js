import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import HeaderComponents from '../Components/Header';
import HomePageContainer from '../Containers/Home';
import ContactPageContainer from '../Containers/Contact';
import AboutPageContainer from '../Containers/About';
import CartPageContainer from '../Containers/Cart';
import ProductsPageContainer from '../Containers/Products';
import SingleProductContainer from '../Containers/SingleProduct';
import SearchContainerPage from '../Containers/Search';
import LoginContainer from '../Containers/Login';
import FooterComponent from '../Components/Footer';
import UserContainer from '../Containers/User';
const RouteConfigComponents = ()=>{
    return (
        <>
            <BrowserRouter>
                <HeaderComponents />
                <Routes>
                    <Route path="/" element={<HomePageContainer />} />
                    <Route path="/about" element={<AboutPageContainer />} />
                    <Route path="/contact" element={<ContactPageContainer />} />
                    <Route path="/cart" element={<CartPageContainer />} />
                    <Route path="/product/:id" element={<SingleProductContainer />} />
                    <Route path="/products/:catId" element={<ProductsPageContainer />} />
                    <Route path="/search/:searchKey" element={<SearchContainerPage />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path='/user' element={<UserContainer />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}


export default RouteConfigComponents;