import React, {Component} from 'react';

import Home from "./HomeComponent";



class HomeContainer extends Component{


    render(){

        return <Home {...this.props} />


    }
}

export default HomeContainer;