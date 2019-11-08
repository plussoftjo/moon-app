import React from 'react';
import {View,Text,Image,Dimensions} from 'react-native';
import { Container, Header, Left, Right, Body,Title,Button,Icon, Content } from 'native-base';
import {colors} from '../../../Common/Colors';
import {inject,observer} from 'mobx-react';
@inject('settings')
@inject('auth')
@inject('sectiona')
@observer
export default class MyTickets extends React.Component {
    render() {
        let {navigation,sectiona,auth} = this.props;
        let locale = this.props.settings.locale.title
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {navigation.navigate('SectionAMain')}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                </Header>
                <Content>
                    <Text style={{color:colors.textColor,fontWeight:'700',padding:15,fontSize:20,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>{locale == 'en'?'My Tickets':'قائمة التذاكر'}</Text>
                    {auth.user.sectiona_ticket.length == 0 &&
                    <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center',paddingTop:'15%'}}>
                        <Icon type="Feather" name="alert-triangle" style={{color:colors.textColor,fontSize:128}}/>
                        <Text style={{fontSize:18,color:colors.textColor,paddingLeft:20,paddingRight:20,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}}>
                            {locale == 'en'?'There are no tickets, Buy a one':'لا يوجد تذاكر حاليا , قم بشراء تذكرة للاستفادة من الخدمات'}
                        </Text>
                    </View>
                    }
                    {auth.user.sectiona_ticket.map((trg,index) => 
                       <View key={index} style={{margin:20,marginLeft:10,marginRight:10,borderRadius:10}}>
                            <View style={{padding:10,flexDirection:'row',justifyContent:'space-between',backgroundColor:colors.textColor,borderBottomWidth:1,borderBottomColor:colors.darkrgba,borderRadius:5}}>
                                <View style={{width:'35%',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>#{trg.id + 1001}</Text>
                                </View>
                                <View style={{width:'65%'}}>
                                    <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{trg.psychologicalcounseling.created_at}</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:'white',padding:5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                                        <Image source={{uri:auth.serverUri + trg.psychologicalcounseling.image}} style={{height:40,width:'100%'}} resizeMode="contain" />
                                    </View>
                                    <View style={{width:'80%'}}>
                                        <View style={{flexDirection:'column',justifyContent:'space-around'}}>
                                            <View>
                                                <Text style={{textAlign:'left',fontWeight:'600',color:colors.textColor,fontSize:22,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?trg.psychologicalcounseling.name_en:trg.psychologicalcounseling.name_ar}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{paddingTop:5,paddingLeft:10}}>
                                    <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplay':'CairoRegular',textAlign:'left'}}>
                                        {locale == 'en'?trg.psychologicalcounseling.description_en:trg.psychologicalcounseling.description_ar}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                    <Button onPress={() => {
                                        this.props.sectiona.selected_ticket = trg;
                                        this.props.navigation.navigate('Ticket');
                                        }} small rounded dark style={{width:100,height:35,justifyContent:'center',alignContent:'center',alignItems:'center'}}><Text style={{fontWeight:'700',color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Open':'متابعة'}</Text></Button>
                                </View>
                            </View>
                        </View> 
                    )}
                    
                </Content>
            </Container>
        )
    }
}