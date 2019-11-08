import React from 'react';
import {Header,Body,Right,Left,Icon,Button, Container, Content} from 'native-base';
import {View} from 'react-native';
import { Payment } from '../../../Components';
import { WebView } from 'react-native-webview';

import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('quiz')
@inject('settings')
@inject('auth')
@observer
export default class QuizPayment extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        const runFirst = `
        window.id = '${this.props.quiz.selected_quiz.id}' ;
        window.price = '${this.props.quiz.selected_quiz.price}';
        window.user_id = '${this.props.auth.user.id}';
        window.type = 'quiz';
        true;
        `;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent>
                            <Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <WebView
                source={{ uri:'http://35.176.214.48/checkout' }}
                onMessage={event => {
                    // this.props.auth.user.sectiona_ticket.push({id:8988,user_id:this.props.auth.user.id,psychologicalcounseling_id:this.props.sectiona.selected_catg.id,price:this.props.sectiona.selected_catg.price,psychologicalcounseling:this.props.sectiona.selected_catg})
                    console.log(event.nativeEvent.data);
                    let ticket = JSON.parse(event.nativeEvent.data);
                    this.props.auth.user.quiz_ticket.push(ticket);
                    this.props.navigation.navigate('DoneQuiz')
                }}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                />
            </Container>
        )
    }
}