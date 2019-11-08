import React from 'react';
import {Container,Header,Body,Left,Right,Icon,Button} from 'native-base';
import {View,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import {colors} from '../../../Common/Colors'
import {inject,observer} from 'mobx-react';
@inject('settings')
@observer
export default class SportMain extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={()=> {
                            this.props.navigation.navigate('AppMainScreen')
                        }}>
                            <Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} />
                        </Button>
                    </Left>
                </Header>
                {/* <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                    <Icon type="Feather" name="alert-triangle" style={{fontSize:128,color:colors.textColor}} />
                    <Text style={{fontWeight:'700',fontSize:20,color:colors.textColor,paddingTop:8}}>
                        {locale == 'en'?'Well Comming Soon':'سيتوفر قريبا'}
                    </Text>
                </View> */}
                <WebView
                source={{ uri:'https://musclewiki.org/' }}
                javaScriptEnabled={true}
                />
            </Container>
        )
    }
}