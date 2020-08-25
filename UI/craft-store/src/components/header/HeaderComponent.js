import React, {Component} from 'react';
import logo from '../../static/img/logo.png'
import cart from '../../static/img/cart.png'

// import {UserFetchData} from '../actions/actions'
// import MyAccount from "./user/MyAccount";



const Header =(props) => {
// function handleClick(event){
//         event.preventDefault()
//
//         localStorage.removeItem("token")
//         window.location.reload();
//
//     }


    return <div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">SEARCH HERE</h4>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <form method="get" className="searchform" action="/search" role="search">
                                        <input type="hidden" name="type" value="product"></input>
                                            <input type="text" name="q" className="form-control control-search"></input>
                                    <span className="input-group-btn">
                                      <button className="btn btn-default button_search" type="button"><i data-toggle="dropdown"
                                                                                                         className="ion-ios-search"></i></button>
                                    </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="topbar-mobile hidden-lg hidden-md">
                        <div className="active-mobile">
                            <div className="language-popup dropdown">
                                <a id="label" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    <span className="icon"><i className="ion-ios-world-outline" aria-hidden="true"></i></span>
                                    <span>English</span>
                                    <span className="ion-chevron-down"></span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="label">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Vietnamese</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-nav">
                            <div className="active-mobile">
                                <div className="header_user_info popup-over e-scale hidden-lg hidden-md dropdown">
                                    <div data-toggle="dropdown" className="popup-title dropdown-toggle" title="Account">
                                        <i className="ion-android-person"></i><span> Account</span>
                                    </div>
                                    <ul className="links dropdown-menu list-unstyled">
                                        <li>
                                            <a id="customer_login_link" href="#" title="Sign in"><i
                                                className="ion-log-in"></i> Login</a>
                                        </li>
                                        <li>
                                            <a id="customer_register_link" href="#" title="Register"><i
                                                className="ion-ios-personadd"></i> Register</a>
                                        </li>
                                        <li>
                                            <a className="account" rel="nofollow" href="#" title="My account"><i
                                                className="ion-ios-person"></i> My account</a>
                                        </li>
                                        <li>
                                            <a id="wishlist-total" title="Wishlist" href="#"><i
                                                className="ion-ios-heart"></i> Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="#" title="Check out"><i className="ion-ios-cart"></i> Check out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="active-mobile search-popup pull-right">
                                <div className="search-popup dropdown" data-toggle="modal" data-target="#myModal">
                                    <i className="ion-search fa-3a"></i>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="top-nav hidden-xs hidden-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    <div className="left-nav">
                                        <div className="location dropdown">
                                            <a id="label1" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                               aria-haspopup="true" aria-expanded="false">
                                                <span className="icon"><i className="ion-ios-location"
                                                                          aria-hidden="true"></i></span>
                                                <span>Our Store</span>
                                                <span className="ion-chevron-down"></span>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="label1">
                                                <li><a href="#">New York</a></li>
                                                <li><a href="#">California</a></li>
                                            </ul>
                                        </div>
                                        <div className="language dropdown">
                                            <a id="label2" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                               aria-haspopup="true" aria-expanded="false">
                                                <span className="icon"><i className="ion-ios-world-outline"
                                                                          aria-hidden="true"></i></span>
                                                <span>English</span>
                                                <span className="ion-chevron-down"></span>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="label2">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">Vietnamese</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    <div className="right-nav">
                                        <ul>
                                            <li><a href="#"><i className="ion-ios-heart fa-1a"
                                                               aria-hidden="true"></i>wishlist</a></li>
                                            <li><a href="#"><i className="ion-arrow-swap fa-1a"
                                                               aria-hidden="true"></i>compare</a></li>
                                            <li><a href="#"><i className="ion-ios-personadd fa-1a" aria-hidden="true"></i>create
                                                account</a></li>
                                            <li><a href="#"><i className="ion-log-in fa-1a" aria-hidden="true"></i>login</a>
                                            </li>
                                        </ul>
                                        <span className="phone">800-123-6789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-8 col-xs-7 logo">
                                    <a href="#" title="Clickbuy"><img src={logo} alt="images" className="img-reponsive"></img></a>
                                </div>
                                <div className="col-md-9 col-sm-4 col-xs-5 nextlogo">
                                    <div className="block block-2">
                                        <div className="cart">
                                            <a href="#" title="" id="label3" className="dropdown-toggle" data-toggle="dropdown"
                                               role="button" aria-haspopup="true" aria-expanded="false">
                                                <div className="photo photo-cart">
                                                    <img src={cart} alt="images" className="img-reponsive"></img>
                                                        <span className="lbl">05</span>
                                                </div>
                                                <p className="inform inform-cart">
                                                    <span className="strong">CART<br></br></span>
                                                    <span className="price-cart">$1150.69</span>
                                                </p>
                                            </a>
                                            <div className="dropdown-menu dropdown-cart" aria-labelledby="label3">
                                                <ul>
                                                    <li>
                                                        <div className="item-order">
                                                            <div className="item-photo">
                                                                <a href="#"><img src="img/cart1.png" alt="images"
                                                                                 className="img-responsive"></img></a>
                                                            </div>
                                                            <div className="item-content">
                                                                <h3><a href="#" title="">iPad Pro MLMX2CL/A</a></h3>
                                                                <p className="price black">$199.69</p>
                                                                <p className="quantity">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="btn-delete"><a href="#" title=""
                                                                                       className="btndel">x</a></div>
                                                    </li>
                                                    <li>
                                                        <div className="item-order">
                                                            <div className="item-photo">
                                                                <a href="#"><img src="img/cart1.png" alt="images"
                                                                                 className="img-responsive"></img></a>
                                                            </div>
                                                            <div className="item-content">
                                                                <h3><a href="#" title="">iPad Pro MLMX2CL/A</a></h3>
                                                                <p className="price black">$199.69</p>
                                                                <p className="quantity">x1</p>
                                                            </div>
                                                        </div>
                                                        <div className="btn-delete"><a href="#" title=""
                                                                                       className="btndel">x</a></div>
                                                    </li>
                                                </ul>
                                                <div className="content-1">
                                                    <span className="total">Total: <strong
                                                        className="price black">$399.00</strong></span>
                                                    <span className="quantity"><strong
                                                        className="number">02</strong> products</span>
                                                </div>
                                                <div className="content-2">
                                                    <a href="#" className="addcart">ADD TO CART</a>
                                                    <a href="#" className="viewcart">View Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block block-1">
                                        <div className="protect">
                                            <div className="photo">
                                                <svg width="28" height="33" id="Capa_1" data-name="Capa 1"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.05 214.27">
                                                    <title>security</title>
                                                    <path
                                                        d="M196.93,55.17c-.11-5.78-.21-11.25-.21-16.54a7.5,7.5,0,0,0-7.5-7.5c-32.07,0-56.5-9.22-76.85-29a7.5,7.5,0,0,0-10.46,0c-20.35,19.79-44.77,29-76.84,29a7.5,7.5,0,0,0-7.5,7.5c0,5.29-.1,10.76-.22,16.54-1,53.84-2.44,127.57,87.33,158.68a7.49,7.49,0,0,0,4.91,0C199.36,182.74,198,109,196.93,55.17ZM107.13,198.81c-77-28-75.82-89.23-74.79-143.35.06-3.25.12-6.4.16-9.48,30-1.27,54.06-10.37,74.63-28.28,20.57,17.91,44.59,27,74.63,28.28,0,3.08.1,6.23.16,9.48C183,109.58,184.12,170.84,107.13,198.81Z"
                                                        transform="translate(-17.11 0)"/>
                                                    <path
                                                        d="M133,81.08l-36.2,36.2L81.31,101.83a7.5,7.5,0,0,0-10.61,10.61l20.75,20.75a7.5,7.5,0,0,0,10.61,0l41.5-41.5A7.5,7.5,0,1,0,133,81.08Z"
                                                        transform="translate(-17.11 0)"/>
                                                </svg>
                                            </div>
                                            <p className="inform">
                                                <span className="strong">Infomation<br></br></span> Protected
                                            </p>
                                        </div>
                                        <div className="return">
                                            <div className="photo">
                                                <svg width="30" height="30" id="Capa_2" data-name="Capa 1"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612.85">
                                                    <title>update-arrows</title>
                                                    <path
                                                        d="M600.48,221.79c-14.43-50.5-40.14-94.33-77.94-132.13a300.48,300.48,0,0,0-100-66.57C385,7.84,346.58,0,306.78,0V37.47c69.91,0,138.93,27,190,78.28A264.15,264.15,0,0,1,564.7,231.16c12.55,43.87,14.38,88,4.68,132.47A261.77,261.77,0,0,1,509.83,482l-52.18-51.18V558.33l130.13,2-52.18-52.18Q587.78,448.93,604.84,373A301.45,301.45,0,0,0,600.48,221.79Z"
                                                        transform="translate(-0.43)"/>
                                                    <path
                                                        d="M47.85,382A267.44,267.44,0,0,1,43.5,249.56,263.58,263.58,0,0,1,103.38,130.8l52.18,51.85V54.53L25.44,53.19l51.85,51.52Q25.11,163.92,8,239.85a301.82,301.82,0,0,0,4.35,151.54c14.34,50.2,40.14,94,77.95,131.81a300.35,300.35,0,0,0,100,66.57,306.59,306.59,0,0,0,116.42,23.08v-36.8a267,267,0,0,1-190.35-78.94C83.54,464.09,60.41,425.9,47.85,382Z"
                                                        transform="translate(-0.43)"/>
                                                </svg>
                                            </div>
                                            <p className="inform">
                                                <span className="strong">Free<br></br></span> Return
                                            </p>
                                        </div>
                                    </div>
                                    <div className="search hidden-xs hidden-sm">
                                        <form action="#" className="search-form">
                                            <input type="text" name="s" className="form-control"
                                                   placeholder="Search entrie store here"></input>
                                                <button type="submit" className="search-icon"></button>
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-xs-6 column-left">
                                    <aside id="column-left">
                                        <nav className="navbar-default">
                                            <div className="menu-heading js-nav-menu ">Всі категорії</div>
                                            <div className="vertical-wrapper v3 js-dropdown-menu">
                                                <ul className="level0">
                                                    <li><a href="#">camera</a><span className="icon icon-camera"></span>
                                                    </li>
                                                    <li><a href="#">laptop</a><span className="icon"></span></li>
                                                    <li><a href="#">mobile phone</a><span className="icon"></span></li>
                                                    <li className="game">
                                                        <a href="#">game control</a>
                                                        <div className="dropdown-content">
                                                            <ul className="level1">
                                                                <li className="sub-menu col-3">
                                                                    <a href="#">ACCESSORIES</a>
                                                                    <ul className="level2">
                                                                        <li className="col-inner"><a href="#">Maybellin
                                                                            Face Power</a></li>
                                                                        <li className="col-inner"><a href="#">Chanel
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Mascara
                                                                            For Full Lashes Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom Maybellin Face</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom</a></li>
                                                                        <li className="col-inner"><a href="#">Lady Dior
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a
                                                                            href="#">Mirinda</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="sub-menu col-3">
                                                                    <a href="#">Electronic</a>
                                                                    <ul className="level2">
                                                                        <li className="col-inner"><a href="#">Maybellin
                                                                            Face Power</a></li>
                                                                        <li className="col-inner"><a href="#">Chanel
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Mascara
                                                                            For Full Lashes Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom Maybellin Face</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom</a></li>
                                                                        <li className="col-inner"><a href="#">Lady Dior
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a
                                                                            href="#">Casopia</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="sub-menu col-3">
                                                                    <a href="#">COMPUTER & OTHERS</a>
                                                                    <ul className="level2">
                                                                        <li className="col-inner"><a href="#">Maybellin
                                                                            Face Power</a></li>
                                                                        <li className="col-inner"><a href="#">Chanel
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Mascara
                                                                            For Full Lashes Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom Maybellin Face</a></li>
                                                                        <li className="col-inner"><a href="#">Offical
                                                                            Cosme-Decom</a></li>
                                                                        <li className="col-inner"><a href="#">Lady Dior
                                                                            Mascara</a></li>
                                                                        <li className="col-inner"><a href="#">Draven</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div className="clearfix"></div>
                                                            <div className="banner">
                                                                <a href="#"><img src="img/megamenubanner.png"
                                                                                 alt="images"
                                                                                 className="img-responsive"></img></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">headphone</a></li>
                                                    <li><a href="#">mouse</a></li>
                                                    <li><a href="#">washing machine</a></li>
                                                    <li><a href="#">air conditional</a></li>
                                                    <li><a href="#">accessories</a></li>
                                                    <li><a href="#">others</a></li>
                                                    <li className="sub-form-li">
                                                        <div>
                                                            Subscribe
                                                        </div>
                                                        <form action="#" className="sub-form">
                                                            <input type="text" name="e" className="form-control"
                                                                   placeholder="Your email here..."></input>
                                                                <button type="submit" className="btn btn-sub">Send Now
                                                                </button>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </aside>
                                </div>
                                <div className="col-md-9 col-sm-8 col-xs-6 column-right">
                                    <div className="deal">
                                        <a href="#" className="btn-deal">Hot Deal</a>
                                    </div>
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target="#myNavbar">
                                        <span className="menu-title">MENU</span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                        <ul className="menubar js-menubar">
                                            <li className=" menu-homepage menu-item-has-child dropdown">
                                                <a href="/home" title="Home"><i className="fa fa-home"></i>Головна</a>
                                                <span className="plus js-plus-icon"></span>

                                            </li>
                                            <li className="menu-collection-page menu-item-has-child dropdown">
                                                <a href="/all-categories" title="Marketplace">Категорії</a>
                                                <span className="plus js-plus-icon"></span>
                                                <ul className="dropdown-menu menu-level">
                                                    <li><a href="product-collection.html" title="shop collection">Shop
                                                        Collection</a></li>
                                                    <li><a href="shop-list-v2.html" title="shop list v1">Shop List
                                                        V1</a></li>
                                                    <li><a href="shop-list-v3.html" title="shop list v2">Shop List
                                                        V2</a></li>
                                                    <li><a href="#" title="shoplist v3">Shop List V3</a></li>
                                                </ul>
                                            </li>
                                            <li className=" menu-demo-page menu-item-has-child dropdown">
                                                <a href="#" title="Sellerdemo">SELLER DEMO</a>
                                                <span className="plus js-plus-icon"></span>
                                                <div className="dropdown-menu dropdown-menu-bg">
                                                    <ul className="level1">
                                                        <li className="sub-menu col-3">
                                                            <a href="#">Cart pages</a>
                                                            <ul className="level2">
                                                                <li className="col-inner"><a href="checkout-1.html"
                                                                                             title="">Shopping Cart</a>
                                                                </li>
                                                                <li className="col-inner"><a href="checkout-2.html"
                                                                                             title="">Check Out</a></li>
                                                                <li className="col-inner"><a href="checkout-3.html"
                                                                                             title="">Order</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="sub-menu col-3">
                                                            <a href="#">Product Pages</a>
                                                            <ul className="level2">
                                                                <li className="col-inner"><a href="shop-single.html"
                                                                                             title="">Shop Single V1</a>
                                                                </li>
                                                                <li className="col-inner"><a href="shop-single-v2.html"
                                                                                             title="">Shop Single V2</a>
                                                                </li>
                                                                <li className="col-inner"><a href="#" title="">Shop
                                                                    Single V3</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="sub-menu col-3">
                                                            <a href="#">NEW Arrival</a>
                                                            <ul className="level2">
                                                                <li className="text-center"><a href="comming-soon.html"><img
                                                                    src="img/megaimg.png" alt="images"
                                                                    className="img-responsive"></img></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </li>
                                            <li className="dropdown menu-contact-page menu-item-has-child">
                                                <a href="#" title="ContactUs">CONTACT US</a>
                                                <span className="plus js-plus-icon"></span>
                                                <ul className="dropdown-menu menu-level">
                                                    <li><a href="contact_us.html" title="contact us">Contact Us </a>
                                                    </li>
                                                    <li><a href="about-us.html" title="about us">About Us</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-blog-page menu-item-has-child">
                                                <a href="#" title="Blog">blog</a>
                                                <span className="plus js-plus-icon"></span>
                                                <ul className="dropdown-menu menu-level menu-level-last">
                                                    <li><a href="blog-v1.html" title="blog">Blog</a></li>
                                                    <li><a href="blog-single-v1.html" title="blog-single">Blog
                                                        Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown menu-others-page menu-item-has-child"><a href="#"
                                                                                                             title="Others">others</a>
                                                <span className="plus js-plus-icon"></span>
                                                <ul className="dropdown-menu menu-level menu-level-last">
                                                    <li><a href="404.html" title="error page">404</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>

}
export default Header;

