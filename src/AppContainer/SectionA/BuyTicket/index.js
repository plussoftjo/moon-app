import React from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {Payment} from '../../../Components';
import { WebView } from 'react-native-webview';
import {inject,observer} from 'mobx-react'
import { colors } from '../../../Common/Colors';
@inject('settings')
@inject('auth')
@inject('sectiona')
@observer
export default class BuyTicket extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        const runFirst = `
        window.id = '${this.props.sectiona.selected_catg.id}' ;
        window.price = '${this.props.sectiona.selected_catg.price}';
        window.user_id = '${this.props.auth.user.id}';
        window.type = 'sectiona';
        true;
        `;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body>
                        <Title></Title>
                    </Body>
                    <Right>                   
                    </Right>
                </Header>
                <View style={{flex:1}}>
                <WebView
                source={{ uri:'http://35.176.214.48/checkout' }}
                onMessage={event => {
                    // this.props.auth.user.sectiona_ticket.push({id:8988,user_id:this.props.auth.user.id,psychologicalcounseling_id:this.props.sectiona.selected_catg.id,price:this.props.sectiona.selected_catg.price,psychologicalcounseling:this.props.sectiona.selected_catg})
                    console.log(event.nativeEvent.data);
                    let ticket = JSON.parse(event.nativeEvent.data);
                    this.props.auth.user.sectiona_ticket.push(ticket);
                    this.props.navigation.navigate('Done')
                }}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                />
                    {/* <Payment navigation={this.props.navigation} locale={locale} sectiona={this.props.sectiona} type="SectionA" /> */}
                </View>
            </Container>
        )
    }
}