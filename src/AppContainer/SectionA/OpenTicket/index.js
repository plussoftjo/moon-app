import React from 'react';
import {View,Text,Image,Dimensions} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { colors } from '../../../Common/Colors';
import {inject,observer} from 'mobx-react';
@inject('settings')
@inject('sectiona')
@observer
export default class OpenTicket extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
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
                <Content style={{paddingTop:15}}>
                    <View style={{flexDirection:'row',borderBottomColor:colors.textColor,borderBottomWidth:1,paddingBottom:20}}>
                        <View style={{width:'40%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={{uri:this.props.sectiona.serverUri + this.props.sectiona.selected_catg.image}} style={{height:100,width:'100%'}} resizeMode="contain" />
                        </View>
                        <View style={{width:'60%'}}>
                            <View style={{flexDirection:'column',justifyContent:'space-around'}}>
                                <View>
                                    <Text style={{fontWeight:'600',textAlign:locale == 'en'?'left':'left',color:colors.textColor,fontSize:22,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?this.props.sectiona.selected_catg.name_en:this.props.sectiona.selected_catg.name_ar}</Text>
                                </View>
                                <View style={{width:'50%',marginTop:Dimensions.get('window').height * 0.070}}>
                                    <Button small rounded light style={{justifyContent:'center',alignItems:'center',alignContent:'center',height:35}}><Text style={{textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.sectiona.selected_catg.price} KWD</Text></Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{paddingTop:15,paddingLeft:15,fontWeight:'800',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:24,color:'white',textAlign:locale == 'en'?'left':'left'}}>
                            {locale == 'en'?'Description':'الوصف'}
                        </Text>
                        <Text style={{paddingTop:10,fontSize:16,color:colors.textColor,paddingLeft:15,lineHeight:25,fontFamily:locale == 'en'?'BigShouldersDisplay':'CairoRegular',textAlign:locale == 'en'?'left':'left'}}>
                            {locale == 'en'?this.props.sectiona.selected_catg.description_en:this.props.sectiona.selected_catg.description_ar}
                        </Text>
                    </View>
                    <View>
                        <Text style={{paddingTop:30,paddingLeft:15,fontWeight:'800',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:24,color:'white',textAlign:locale == 'en'?'left':'left'}}>
                            {locale == 'en'?'Features':'المميزات'}
                        </Text>
                        <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center'}}>
                            <View style={{width:'33.33%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                <Icon type="Feather" name="message-square" style={{color:colors.textColor,fontSize:40}}></Icon>
                                <Text style={{color:colors.textColor,textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontWeight:'700'}}>
                                    {locale == 'en'?'Messages':'رسائل نصية'}
                                </Text>
                            </View>
                            <View style={{width:'33.33%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                <Icon type="Feather" name="phone-call" style={{color:colors.textColor,fontSize:40}}></Icon>
                                <Text style={{color:colors.textColor,textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontWeight:'700'}}>
                                    {locale == 'en'?'Phone Call':'محادثة صوتية'}
                                </Text>
                            </View>
                            <View style={{width:'33.33%',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                                <Icon type="Feather" name="cast" style={{color:colors.textColor,fontSize:40}}></Icon>
                                <Text style={{color:colors.textColor,textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontWeight:'700'}}>
                                    {locale == 'en'?'Video Call':'محادثة فيديو'}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{padding:20,paddingTop:40}}>
                        <Button onPress={() => {this.props.navigation.navigate('BuyTicket')}} rounded block light><Text style={{fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:18}}>{locale == 'en'?'Buy Ticket':'شراء التذكرة'}</Text></Button>
                    </View>
                </Content>
            </Container>
        )
    }
}