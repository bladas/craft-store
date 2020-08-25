import React, {Component} from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Footer from "./components/footer/FooterContainer";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import CategoriesContainer from "./components/categories/CategoriesContainer";
import Home from "./components/home/HomeContainer";
import AllProductsContainer from "./components/product/AllProductsContainer";
// import Login from "./components/user/login";
// import Register from "./components/user/registration"
// import MyAccountContainer from "./components/user/MyAccountContainer";
// import CategoryContainer from "./components/CategoryContainer";
// import ProductContainer from "./components/ProductContainer";
// import Admin from "./components/user/Admin";
class App extends Component {


  render() {
    return (
        <BrowserRouter>

            <div className='app-wraper'>
            <HeaderContainer/>
            <div className='app-wraper-content'>
                <Route path='/home' component={Home}/>
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path='/registration' component={Register}/>*/}
                {/*<Route path='/product/:id' component={ProductContainer}/>*/}
                <Route path='/all-categories' component={CategoriesContainer}/>
                <Route path='/all-products' component={AllProductsContainer}/>
                {/*<Route path='/category/:id' component={CategoryContainer}/>*/}
                {/*<Route path='/profile' component={MyAccountContainer}/>*/}
                {/*<Route path='/admin' component = {Admin}/>*/}


            </div>

            <Footer/>
            </div>
        </BrowserRouter>
    )
}
}

export default (App);