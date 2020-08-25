import React, {Component} from 'react';

const Categories =(props) => {


    return <div>
        <section className="product-page">
            <div className="container">
                <div className="heading-sub ver2">
                    <h3 className="pull-left">product collection</h3>
                    <ul className="other-link-sub pull-right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a className="active" href="#collection">collection</a></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="widget-product-collection">
                    <div className="row ">
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product1.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Electronics & Computers</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product2.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Beauty, Health & Grocery</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product3.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Sports & Outdoors</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product4.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Home, Garden & Tools</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product5.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Books & Audible</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12 ">
                            <div className="product-item ver2">
                                <div className="prod-item img">
                                    <a href="#"><img src="img/product-collection/product6.png" alt="images"
                                                     className="img-responsive"></img></a>
                                </div>
                                <div className="prod-info-ver2">
                                    <h3><a href="#" title="">Automotive & Industrial</a></h3>
                                    <span className="total">(102 product)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>

}
export default Categories;

