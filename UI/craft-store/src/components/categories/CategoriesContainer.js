import React, {Component} from 'react';
import CategoriesComponent from "./CategoriesComponent";



class CategoriesContainer extends Component{


    render(){

        return <CategoriesComponent {...this.props} />


    }
}

export default CategoriesContainer;