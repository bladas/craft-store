import React, {Component} from 'react';
import AllProducts from "./AllProductsComponent";



class AllProductsContainer extends Component{


    render(){

        return <AllProducts {...this.props} />


    }
}

export default AllProductsContainer;