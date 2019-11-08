import React from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { colors } from '../../../Common/Colors';
import {inject,observer} from 'mobx-react';
@inject('settings')
@observer
export default class CatgShow extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
               <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={this.props.settings.locale.title == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body>
                        <Title></Title>
                    </Body>
                    <Right>
                       
                    </Right>
                </Header>
                <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',paddingLeft:20,paddingRight:20}}>
                    <Icon type="Feather" name="activity" style={{fontSize:86,color:colors.textColor}} />
                    <Text style={{paddingTop:25,fontWeight:'600',fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:22,color:colors.textColor}}>{this.props.settings.locale.title == 'en'?"You Don't Have any Ticket here":"لا تملك اي تذاكر حاليا"}</Text>
                    <Text style={{fontWeight:'600',paddingTop:10,fontSize:16,color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplay':'CairoRegular'}}>{this.props.settings.locale.title == 'en'?'Open ticket now to get help':'قم بشراء تذكرة حاليا لنقوم بمساعدتك'}</Text>
                    <Button style={{marginTop:20,width:'100%'}} block rounded light onPress={() => {this.props.navigation.navigate('OpenTicket')}}><Text style={{fontWeight:'700',fontSize:16,textAlign:'center',fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.settings.locale.title == 'en'?'Buy Ticket':'شراء تذكرة'}</Text></Button>
                </View>
            </Container>
        )
    }
}