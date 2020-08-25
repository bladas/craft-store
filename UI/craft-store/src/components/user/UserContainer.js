import React, {Component} from 'react';

import User from "./UserComponent";



class UserContainer extends Component{


    render(){

        return <User {...this.props} />


    }
}

export default UserContainer;