import React from 'react';
import {Conatiner,Right,Text,Left,Header,Body,Icon, Container, Content,Button} from 'native-base';
import {View,Image} from 'react-native';

import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('quiz')
@inject('settings')
@observer
export default class BuyQuiz extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent>
                            <Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}}></Icon>
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right/>
                </Header>
                <Content>
                    <View style={{maring:5,borderColor:colors.textColor,borderWidth:1}}>
                        <Image source={{uri:this.props.quiz.serverUri + this.props.quiz.selected_quiz.image}} resizeMode="contain" style={{width:'100%',height:125}} />
                        <Text style={{textAlign:'center',fontSize:18,fontWeight:'700',paddingTop:5,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                            {locale == 'en'?this.props.quiz.selected_quiz.name_en:this.props.quiz.selected_quiz.name_ar}
                        </Text>
                        <Text style={{fontSize:16,padding:15,paddingBottom:0,fontWeight:'700',color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>
                            {locale == 'en'?'Description':' الوصف'}
                        </Text>
                        <Text style={{color:'rgba(0,0,0,0.2)',padding:15,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>
                            {locale == 'en'? this.props.quiz.selected_quiz.description_en:this.props.quiz.selected_quiz.description_ar}
                        </Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',paddingBottom:5,paddingRight:5}}>
                            <Button rounded small light><Text style={{fontWeight:'600',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.quiz.selected_quiz.price}KWD</Text></Button>
                        </View>
                    </View>
                    <View style={{height:'50%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                        <Button onPress={() => {this.props.navigation.navigate('QuizPayment')}} style={{width:300,justifyContent:'center',alignItems:'center',alignContent:'center'}} dark rounded><Text style={{fontWeight:'700',color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Buy Task':'شراء الاختبار'}</Text></Button>
                    </View>
                </Content>
            </Container>
        )
    }
}