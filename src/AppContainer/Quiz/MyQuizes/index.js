import React from 'react';
import {Container,Header,Left,Right,Icon,Button,Text,Content,Body} from 'native-base';
import {View} from 'react-native';

import {inject,observer} from 'mobx-react';
import { QuizCard } from '../../../Components';
import { colors } from '../../../Common/Colors';
@inject('quiz')
@inject('settings')
@inject('auth')
@observer
export default class MyQuizes extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.navigate('QuizMain')}}><Icon type="Feather" name={locale=='en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                </Header>
                {this.props.auth.user.quiz_ticket.length == 0 ?
                    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                        <Icon type="Feather" name="alert-circle" style={{fontSize:88,color:colors.textColor}} />
                        <Text style={{fontWeight:'600',color:colors.textColor,fontSize:18,paddingTop:5,textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                            {locale == 'en'?'There Are Now Task Yet':'لا يوجد اختبارات مشترك فيها حاليا'}
                        </Text>
                    </View>
                :
                <Content >
                {this.props.auth.user.quiz_ticket.map((trg,index) => 
                    <QuizCard key={index} data={trg.quiz}  type="myQuiz" locale={locale} colors={colors} navigation={this.props.navigation} />    
                )}
                </Content>
                }
            </Container>
        )
    }
}