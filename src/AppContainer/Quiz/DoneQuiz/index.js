import React from 'react';
import {Container,Content,Header,Left,Text,Body,Right,Icon,Button} from 'native-base';
import {View} from 'react-native';
import { colors } from '../../../Common/Colors';
import {inject,observer} from 'mobx-react'
@inject('settings')
@observer
export default class DoneQuiz extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left></Left>
                    <Body/>
                    <Right/>
                </Header>
                <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Icon type="Feather" name="check-circle" style={{fontSize:88,color:colors.textColor}} />
                    <Text style={{fontSize:16,fontWeight:'700',paddingTop:10,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Payment Done':'تمت العملية'}</Text>
                    <Text style={{fontWeight:'600',textAlign:'center',paddingTop:15,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                        {locale == 'en'?'Thank you for choice us now you can open the task and wait the result':'شكرا لك لاختيارك خدماتنا يمكنك اتمام الاختبار وانتظار النتيجة'}
                    </Text>
                    <Button onPress={() => {this.props.navigation.navigate('MyQuizes')}} light rounded style={{width:300,justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:60}}>
                        <Text style={{color:'black',fontWeight:'600',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'My Quizes':'اختباراتي'}</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}