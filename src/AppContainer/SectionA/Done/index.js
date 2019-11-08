import React from 'react';
import {View,Text} from 'react-native';
import { Container,Header,Right,Body,Title,Left,Icon,Button } from 'native-base';

import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('settings')
@inject('sectiona')
@observer
export default class Done extends React.Component {
    render() {
        let {navigation,sectiona} = this.props;
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                    </Left>
                    <Body>
                        <Title></Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={{height:'90%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <Icon type="MaterialIcons" name="done" style={{color:colors.textColor,fontSize:86}} />
                    <Text style={{fontWeight:'700',fontSize:20,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:'white'}}>{locale == 'en'?'Payment Done':'تمت العملية بنجاح'}</Text>
                    <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:colors.textColor,fontSize:18,padding:20}}>
                        {locale == 'en'?'You Payment Is Done You can now use your ticket to get you call with your Doctor, ticket added to your tickets':'تمت العملية بشكل ناجح يمكنك الان الاستفاد من الخدمة تم اضافة التذكرة الى قائمة التذاكر الخاصة بك'}
                    </Text>
                    <View style={{width:'100%',padding:30,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Button block light rounded onPress={() => navigation.navigate('MyTickets')}><Text style={{color:'black',fontSize:18,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'My Tickets':'قائمة تذاكري'}</Text></Button>
                    </View>
                </View>
            </Container>
        )
    }
}