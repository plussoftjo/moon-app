import React from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import { Button} from 'native-base';

import {inject,observer} from 'mobx-react';
@inject('settings')
@inject('main')
@observer
export default class AppMain extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../Images/MainBG.jpg')} style={{height:'100%',width:'100%'}}>
                <View style={Style.nav}>
                    <Button transparent>
                        <Entypo name="list" color="white" style={{fontSize:42}} />
                    </Button>
                </View>
                <View style={Style.Sections}>
                    {this.props.main.sections.map((trg,index) => 
                     <TouchableOpacity onPress={() => {this.props.navigation.navigate(trg.at)}} style={Style.SectionIcon} key={index}>
                        <Image source={require('../../Images/Sections/a.jpg')} style={{height:Dimensions.get('window').height * 0.16}} resizeMode="contain" />
                        <Text style={{fontSize:16,fontWeight:'600',color:'white',fontFamily:'Mansalva'}}>{trg.title}</Text>
                    </TouchableOpacity>   
                    )}
                </View>
            </ImageBackground>
        )
    }
}

const Style = StyleSheet.create({
    nav:{
        paddingTop:30,
        paddingRight:15,
        paddingLeft:15
    },
    Sections:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    SectionIcon:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    }
});