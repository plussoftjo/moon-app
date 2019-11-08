/*--Static-librare--*/
import React from 'react';
import {Spinner} from 'native-base';
import {ImageBackground} from 'react-native';
import {t} from '../../Localization';

import {inject,observer} from 'mobx-react';
@inject('auth')
@inject('settings')
@observer
export default class AppLoading extends React.Component {
    constructor(props){
        super(props);
        
        props.auth._auth(props.navigation);

    }
    render() {
        return (
            <ImageBackground source={require('../../Images/auth3.jpg')} style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
               <Spinner color="white"/>
            </ImageBackground>
        )
    }
}