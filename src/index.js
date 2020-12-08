import React, { Component } from 'react';
import Welcome from './component/Welcome';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { setBaseURL } from './apis/default';
import { API_URL } from './apis/constants';
import KontakKita from './component/KontakKita';


class LASTTEST extends Component {
    constructor(props) {
        super(props);
        setBaseURL(API_URL)
        this.state = {}
    }
    render() {
        return (
            <AppNavigator /> );
    }
}
const AppSwitch  = createSwitchNavigator({
    welcome:{screen:Welcome},
    kontak:{screen:KontakKita}
})
const AppNavigator= createAppContainer(AppSwitch)

export default LASTTEST;