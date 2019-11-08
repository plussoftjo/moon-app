import React from 'react';
import {Container,Header,Left,Button,Icon,Body,Right} from 'native-base';
import { Payment } from '../../../Components';
import { colors } from '../../../Common/Colors';
import { WebView } from 'react-native-webview';
import {inject,observer} from 'mobx-react';
@inject('settings')
@inject('courses')
@inject('auth')
@observer
export default class BuyCourse extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        const runFirst = `
        window.id = '${this.props.courses.selected_course.id}' ;
        window.price = '${this.props.courses.selected_course.price}';
        window.user_id = '${this.props.auth.user.id}';
        window.type = 'course';
        true;
        `;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                            <Icon type="Feather" style={{color:colors.textColor}} name={locale == 'en'?'arrow-left':'arrow-right'} />
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <WebView
                source={{ uri:'http://35.176.214.48/checkout' }}
                onMessage={event => {
                    // this.props.auth.user.sectiona_ticket.push({id:8988,user_id:this.props.auth.user.id,psychologicalcounseling_id:this.props.sectiona.selected_catg.id,price:this.props.sectiona.selected_catg.price,psychologicalcounseling:this.props.sectiona.selected_catg})
                    console.log(event.nativeEvent.data);
                    let ticket = JSON.parse(event.nativeEvent.data);
                    this.props.auth.user.course_ticket.push(ticket);
                    this.props.navigation.navigate('DoneCourses')
                }}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                />
            </Container>
        )
    }
}