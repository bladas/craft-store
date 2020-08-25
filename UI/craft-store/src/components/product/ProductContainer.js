import React, {Component} from 'react';
import CategoriesComponent from "./ProductComponent";



class ProductContainer extends Component{


    render(){

        return <CategoriesComponent {...this.props} />


    }
}

export default ProductContainer;