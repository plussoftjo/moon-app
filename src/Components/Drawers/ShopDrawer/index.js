import React from 'react';
import {View,Text,Image} from 'react-native';
import { colors } from '../../../Common/Colors';
import { Icon, Container, Content,Left,Right,List,ListItem } from 'native-base';
import {observer,inject} from 'mobx-react'
@inject('auth')
@observer
export default class MainDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {sections:[
            {title:'Home',title_ar:'الرئيسية',icon:'home',at:'AppMainScreen'},
            {title:'Cart',title_ar:'الحقيبة',icon:'shopping-bag',at:'ShopCart'},
            {title:'Wish List',title_ar:'قائمة الرغبات',icon:'heart',at:'ShopWishlist'},
            {title:'My Order',title_ar:'طلباتي',icon:'shopping-bag',at:'ShopMyOrder'},
            {title:'Search',title_ar:'بحث',icon:'search',at:'ShopSearch'},
            {title:'About Us',title_ar:'حول التطبيق',icon:'file-text',at:'AboutUs'},
            {title:'Settings',title_ar:'الاعدادات',icon:'settings',at:'Settings'},
        ]};
    }
    render() {
        return (
            <View style={{backgroundColor:colors.darkrgba,height:'100%',paddingTop:25}}>
                <View id="ProfileSection" style={{padding:15,backgroundColor:colors.dark,paddingBottom:0}}>
                    <Image source={require('../../../Images/avatar_female.png')} style={{width:60,height:60,borderRadius:30}} resizeMode="contain" />
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{paddingTop:10,fontFamily:this.props.settings.locale.title == 'en'?'Roboto_medium':'Roboto_medium',color:colors.textColor,fontSize:20}}>{this.props.auth.user.name}</Text>
                    <Icon type="Feather" name="chevron-down" style={{color:colors.textColor,paddingTop:10}} />
                    </View>
                </View>
                <View style={{backgroundColor:colors.dark}}>
                    <View id="hr" style={{height:1,backgroundColor:colors.textColor,width:'100%',marginTop:15}}></View>
                </View>
                <Container>
                    <Content>
                        <List>
                            {this.state.sections.map((trg,index) => 
                                <ListItem key={index} onPress={() => {
                                    if(index == 0){
                                        this.props.closeDrawer();
                                    }
                                        this.props.navigation.navigate(trg.at)
                                    }}>
                                    <Left>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon type="Feather" name={trg.icon} style={{color:colors.textColor}} />
                                            <Text style={{marginLeft:10,color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'Roboto_medium':'CairoBold'}}>{this.props.settings.locale.title == 'en'?trg.title:trg.title_ar}</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <Icon type="Feather" name={this.props.settings.locale.title == 'en'?'chevron-right':'chevron-left'} style={{color:colors.textColor}} />
                                    </Right>
                                </ListItem>  
                            )}
                                <ListItem onPress={() => {
                                    this.props.settings._change_language()
                                    }}>
                                    <Left>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon type="Feather" name={'flag'} style={{color:colors.textColor}} />
                                            <Text style={{marginLeft:10,color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'Roboto_medium':'CairoBold'}}>{this.props.settings.locale.title == 'en'?'Change Language':'تغير اللغة'}</Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <Text style={{color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'Roboto_medium':'CairoBold'}}>{this.props.settings.locale.title == 'en'?'EN':'AR'}</Text>
                                    </Right>
                                </ListItem> 
                                <ListItem onPress={() => {
                                    this.props.navigation.navigate('Auth')
                                    }}>
                                    <Left>
                                        <View style={{flexDirection:'row'}}>
                                            <Icon type="Feather" name={'log-out'} style={{color:colors.textColor}} />
                                            <Text style={{marginLeft:10,color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'Roboto_medium':'CairoBold'}}>{this.props.settings.locale.title == 'en'?'Logout':'تسجيل خروج'}</Text>
                                        </View>
                                    </Left>
                                    <Right>

                                    </Right>
                                </ListItem> 
                        </List>
                    </Content>
                </Container>
            </View>
        )
    }
}