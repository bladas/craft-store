import React, {Component} from 'react';

const AllProducts =(props) => {


    return <div>
        <section className="shop-list-v2-page">
            <div className="container">
                <div className="heading-sub">
                    <h3 className="pull-left">shop list</h3>
                    <ul className="other-link-sub pull-right">
                        <li><a href="#home">Home</a></li>
                        <li><a className="active" href="#shop">Shop</a></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="widget-banner">
                    <a href="#" className="images"><img src="img/products/banner-v2.png" alt="images"
                                                        className="img-responsive"></img></a>
                    <div className="banner-text">
                        <h2>Just Press</h2>
                        <p>Mini camera by Instax</p>
                    </div>
                    <div className="banner-button">
                        <a href="#" title="button" className="btn-getit">Get It</a>
                    </div>
                </div>
                <div className="widget-product-list">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <div className="filter-block">
                                <div className="filter-block-shop filter-price">
                                    <div className="block-title">
                                        <h3>FILTER BY PRICE</h3>
                                    </div>
                                    <div className="block-content">
                                        <div className="price-range-holder">
                                            <input type="text" className="price-slider" value=""></input>
                                                <span className="min-max">
                                            Price: $990 - $3450
                                        </span>
                                                <span className="filter-button">
                                            <a href="#">Filter</a>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-block-shop filter-cate">
                                    <div className="block-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className="active">
                                                <a href="#">Laptop & Computer</a>
                                                <span className="number">(08)</span>
                                            </li>
                                            <li>
                                                <a href="#">Accessories</a>
                                                <span className="number">(16)</span>
                                            </li>
                                            <li>
                                                <a href="#">Gaming</a>
                                                <span className="number">(20)</span>
                                            </li>
                                            <li>
                                                <a href="#">Mac Computers</a>
                                                <span className="number">(09)</span>
                                            </li>
                                            <li>
                                                <a href="#">Ultrabooks</a>
                                                <span className="number">(51)</span>
                                            </li>
                                            <li>
                                                <a href="#">Printers & Ink</a>
                                                <span className="number">(07)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<div className="filter-block-shop">*/}
                                    {/*<div className="block-title">*/}
                                        {/*<h3>BRAND</h3>*/}
                                    {/*</div>*/}
                                    {/*<div className="block-content">*/}
                                        {/*<form>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Accesi</input></label>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Bikis</input></label>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Elle</input></label>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Godo</input></label>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Jeana</input></label>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkbox">*/}
                                                {/*<label>*/}
                                                    {/*<input type="checkbox" value="">Ladora</input></label>*/}
                                            {/*</div>*/}
                                        {/*</form>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <div className="filter-block-shop filter-color">
                                    <div className="block-title">
                                        <h3>Color</h3>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li><a href="#"><i className="dot black-d"></i>Black </a></li>
                                            <li><a href="#"><i className="dot blue-sky"></i>Blue </a></li>
                                            <li><a href="#"><i className="dot brown"></i>Brown </a></li>
                                            <li><a href="#"><i className="dot"></i>White </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-xs-12">
                            <div className="filter-block bd">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="box box-view">
                                            <span>Showing 1–12 of 40 results</span>
                                            <div className="button-view">
                                                <span className="col"><i className="ion-ios-keypad fa-3a"></i></span>
                                                <span className="list"><i className="icon-grid-4"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 margin-top3">
                                        <div className="box show pull-left">
                                            <span>Show</span>
                                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">12
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">12</a></li>
                                                <li><a href="#">24</a></li>
                                                <li><a href="#">36</a></li>
                                            </ul>
                                            <span>per page</span>
                                        </div>
                                        <div className="box sort pull-right">
                                            <span>Sort by:</span>
                                            <button className="dropdown-toggle" type="button" data-toggle="dropdown"
                                                    id="menu2">
                                                <span className="dropdown-label">Featured</span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu" aria-labelledby="menu2">
                                                <li><a href="#" title="">Featured</a></li>
                                                <li><a href="#" title="">Best Selling</a></li>
                                                <li><a href="#" title="">Best Selling</a></li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list grid_full grid_sidebar grid-uniform">
                                <div className="product-list-item">
                                    <div className="product-item-img">
                                        <a href="#"><img src="img/products/product1.png" alt="images"
                                                         className="img-responsive"></img></a>
                                        <div className="label label-2 red label-top-20">Hot</div>
                                    </div>
                                    <div className="product-item-info">
                                        <h3><a href="#" title="">Sony Xperia X Compact - SN5605 Unlocked Smartphone</a>
                                        </h3>
                                        <div className="product-item-star ratingstar sm">
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <span className="number">(12)</span>
                                        </div>
                                        <div className="prod-price">
                                            <span className="price black">$199.69</span>
                                        </div>
                                        <div className="button-ver2">
                                            <a href="#" className="addcart-ver2" title="Add to cart"><span
                                                className="icon"></span>ADD TO CART</a>
                                            <a href="#" className="quickview" title="quick view"><i
                                                className="ion-eye fa-4" aria-hidden="true"></i></a>
                                            <a href="#" className="wishlist" title="wishlist"><i
                                                className="ion-heart fa-4" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-list-item">
                                    <div className="product-item-img">
                                        <a href="#"><img src="img/products/product2.png" alt="images"
                                                         className="img-responsive"></img></a>
                                    </div>
                                    <div className="product-item-info">
                                        <h3><a href="#" title="">Sony Xperia X Compact - SN5605 Unlocked Smartphone</a>
                                        </h3>
                                        <div className="product-item-star ratingstar sm">
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <span className="number">(12)</span>
                                        </div>
                                        <div className="prod-price">
                                            <span className="price black">$199.69</span>
                                        </div>
                                        <div className="button-ver2">
                                            <a href="#" className="addcart-ver2" title="Add to cart"><span
                                                className="icon"></span>ADD TO CART</a>
                                            <a href="#" className="quickview" title="quick view"><i
                                                className="ion-eye fa-4" aria-hidden="true"></i></a>
                                            <a href="#" className="wishlist" title="wishlist"><i
                                                className="ion-heart fa-4" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-list-item">
                                    <div className="product-item-img">
                                        <a href="#"><img src="img/products/product3.png" alt="images"
                                                         className="img-responsive"></img></a>
                                        <div className="label label-2 red label-top-20">Hot</div>
                                    </div>
                                    <div className="product-item-info">
                                        <h3><a href="#" title="">Sony Xperia X Compact - SN5605 Unlocked Smartphone</a>
                                        </h3>
                                        <div className="product-item-star ratingstar sm">
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <span className="number">(12)</span>
                                        </div>
                                        <div className="prod-price">
                                            <span className="price black">$199.69</span>
                                        </div>
                                        <div className="button-ver2">
                                            <a href="#" className="addcart-ver2" title="Add to cart"><span
                                                className="icon"></span>ADD TO CART</a>
                                            <a href="#" className="quickview" title="quick view"><i
                                                className="ion-eye fa-4" aria-hidden="true"></i></a>
                                            <a href="#" className="wishlist" title="wishlist"><i
                                                className="ion-heart fa-4" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-list-item">
                                    <div className="product-item-img">
                                        <a href="#"><img src="img/products/product4.png" alt="images"
                                                         className="img-responsive"></img></a>
                                    </div>
                                    <div className="product-item-info">
                                        <h3><a href="#" title="">Sony Xperia X Compact - SN5605 Unlocked Smartphone</a>
                                        </h3>
                                        <div className="product-item-star ratingstar sm">
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <span className="number">(12)</span>
                                        </div>
                                        <div className="prod-price">
                                            <span className="price black">$199.69</span>
                                        </div>
                                        <div className="button-ver2">
                                            <a href="#" className="addcart-ver2" title="Add to cart"><span
                                                className="icon"></span>ADD TO CART</a>
                                            <a href="#" className="quickview" title="quick view"><i
                                                className="ion-eye fa-4" aria-hidden="true"></i></a>
                                            <a href="#" className="wishlist" title="wishlist"><i
                                                className="ion-heart fa-4" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-list-item">
                                    <div className="product-item-img">
                                        <a href="#"><img src="img/products/product5.png" alt="images"
                                                         className="img-responsive"></img></a>
                                        <div className="label label-2 red label-top-20">Hot</div>
                                    </div>
                                    <div className="product-item-info">
                                        <h3><a href="#" title="">Sony Xperia X Compact - SN5605 Unlocked Smartphone</a>
                                        </h3>
                                        <div className="product-item-star ratingstar sm">
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-star-o fa-1" aria-hidden="true"></i></a>
                                            <span className="number">(12)</span>
                                        </div>
                                        <div className="prod-price">
                                            <span className="price black">$199.69</span>
                                        </div>
                                        <div className="button-ver2">
                                            <a href="#" className="addcart-ver2" title="Add to cart"><span
                                                className="icon"></span>ADD TO CART</a>
                                            <a href="#" className="quickview" title="quick view"><i
                                                className="ion-eye fa-4" aria-hidden="true"></i></a>
                                            <a href="#" className="wishlist" title="wishlist"><i
                                                className="ion-heart fa-4" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-pagination">
                                <ul className="pagination">
                                    <li><a href="#"><i className="ion-chevron-left"></i></a></li>
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i className="ion-chevron-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>

}
export default AllProducts;

