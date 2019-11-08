import React from 'react';
import {View} from 'react-native';
import {Spinner } from 'native-base';

export default class Loader extends React.Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.3)'}}>
                <View>
                    <Spinner color="black"/>
                </View>
            </View>
        )
    }
}