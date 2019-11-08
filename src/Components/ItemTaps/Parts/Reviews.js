import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Reviews extends React.Component {
    render() {
        return (
            <View style={Style.box}>
                <Text style={Style.nonText} >
                    {this.props.locale == 'en'?'There Are No Review in this proudct':'لا يوجد معلومات'}
                </Text>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    box:{
        padding:30,
        backgroundColor:'rgba(0,0,0,0.03)'
    },
    nonText:{
        textAlign:'center',
        fontWeight:'600'
    }
});