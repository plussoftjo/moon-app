import React from 'react';
import {Container, Header, Left, Body, Icon,Right, Text,Button} from 'native-base';
import {View} from 'react-native';
import { colors } from '../../../Common/Colors';

import {inject,observer} from 'mobx-react';
@inject('settings')
@observer
export default class DoneCourses extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left></Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Icon type="Feather" name="check-circle" style={{fontSize:128,color:colors.textColor}} />
                    <Text style={{fontSize:16,fontWeight:'700',paddingTop:15,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Proccess Done':'تمت العملية بنجاح'}</Text>
                    <Text style={{color:colors.textColor,paddingTop:15,paddingBottom:15,textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'Thank you For Subscribe the Course Now You can see all the course Videos':'شكرا للاشتراك بالدورة , يمكنك الان متابعة الدورات ومشاهدة جميع حلقات الدورة'}</Text>
                    <Button style={{width:125,justifyContent:'center',alignContent:'center',alignItems:'center'}} rounded dark onPress={() => {this.props.navigation.navigate('MyCourses')}}><Text style={{color:'white',fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'My Course':'دوراتي'}</Text></Button>
                </View>
            </Container>
        )
    }
}