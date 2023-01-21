import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import HeaderComponents from '../Components/Header';
import FooterComponent from '../Components/Footer';
const HomePageContainer =  lazy(()=> import ('../Containers/Home')) ;
const ContactPageContainer =  lazy(()=> import ('../Containers/Contact')) ;
const AboutPageContainer = lazy(()=> import ('../Containers/About')) ;
const CartPageContainer = lazy (()=> import ('../Containers/Cart')) ;
const ProductsPageContainer = lazy (()=> import ('../Containers/Products'));
const SingleProductContainer = lazy (()=> import ( '../Containers/SingleProduct'));
const SearchContainerPage = lazy (()=> import ( '../Containers/Search'));
const LoginContainer = lazy (()=> import ( '../Containers/Login'));
const UserContainer = lazy (()=> import ( '../Containers/User'));
const RouteConfigComponents = ()=>{
    return (
        <>
            <BrowserRouter>
                <HeaderComponents />
                <Suspense fallback={<div>Loading... please wait</div>}>
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
                </Suspense>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}


export default RouteConfigComponents;