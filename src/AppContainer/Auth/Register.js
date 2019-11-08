import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
/* External Components */
import {Content, Item, Input, Icon,Button,Left,Container } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {t} from '../../Localization';
import {Loader} from '../../Components'
import {inject,observer} from 'mobx-react';
@inject('settings')
@inject('auth')
@observer
export default class Register extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../Images/auth3.jpg')} style={LoginStyle.box}>
                {this.props.auth.loader &&
                <View style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:100}}>
                    <Loader/>
                </View>
                }
                <Container style={{backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',paddingLeft:10,paddingRight:10}}>
                        <Content style={{alignContent:'center',paddingTop:Dimensions.get('screen').height /2.7}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:15}}>
                                <View style={{width:'15%'}}></View>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Login')}} style={{width:'35%',borderRightColor:'white',borderRightWidth:1}}>
                                    <Text style={{textAlign:'center',fontWeight:'600',fontSize:16,color:'white'}}>{t('login',{locale:this.props.settings.locale.title})}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}} style={{width:'35%'}}>
                                    <Text style={{textAlign:'center',fontWeight:'600',fontSize:16,color:'white'}}>{t('signup',{locale:this.props.settings.locale.title})}</Text>
                                </TouchableOpacity>
                                <View style={{width:'15%'}}></View>
                            </View>
                            <Item rounded iconLeft  style={{backgroundColor:'white'}}>
                                <Icon active type="AntDesign" name='user' />
                                {this.props.settings.locale.rtl ? 
                                <Left>
                                    <Input placeholder={t('fullname',{locale:this.props.settings.locale.title})} value={this.props.auth.register.name} onChangeText={(value) => {this.props.auth.register.name = value;}} />
                                </Left>
                                :
                                <Input placeholder={t('fullname',{locale:this.props.settings.locale.title})} value={this.props.auth.register.name} onChangeText={(value) => {this.props.auth.register.name = value;}} />
                                }
                            </Item>
                            <View style={{height:10}}></View>
                            <Item rounded iconLeft style={{backgroundColor:'white'}}>
                                <Icon active type="AntDesign" name='user'  />
                                {this.props.settings.locale.rtl ? 
                                <Left>
                                    <Input placeholder={t('phoneNumber',{locale:this.props.settings.locale.title})} keyboardType="numeric" value={this.props.auth.register.phone} onChangeText={(value) => {this.props.auth.register.phone = value;}} />
                                </Left>
                                :
                                <Input placeholder={t('phoneNumber',{locale:this.props.settings.locale.title})} keyboardType="numeric" value={this.props.auth.register.phone} onChangeText={(value) => {this.props.auth.register.phone = value;}}  />
                                }
                            </Item>
                            <View style={{height:10}}></View>
                            <Item rounded iconLeft style={{backgroundColor:'white'}}>
                                <Icon active type="AntDesign" name='key'  />
                                {this.props.settings.locale.rtl ? 
                                <Left>
                                 <Input placeholder={t('password',{locale:this.props.settings.locale.title})} secureTextEntry={true} value={this.props.auth.register.password} onChangeText={(value) => {this.props.auth.register.password = value;}} />
                                </Left>
                                :
                                <Input placeholder={t('password',{locale:this.props.settings.locale.title})} secureTextEntry={true} value={this.props.auth.register.password} onChangeText={(value) => {this.props.auth.register.password = value;}} />
                                }
                            </Item>
                            {this.props.auth.error && 
                                <Text style={{color:'red',fontWeight:'700',marginTop:10}}>{this.props.settings.locale.title == 'en' ? 'Please complete the form':'الرجاء اكمال جميع المعلومات'}</Text>
                            }
                            {this.props.auth.register_success && 
                                <Text style={{color:'green',fontWeight:'700',marginTop:10}}>{this.props.settings.locale.title == 'en' ? 'Register complete success':'تم الانتهاء من التسجيل بنجاح'}</Text>
                            }
                            <Button style={LoginStyle.button} block light onPress={() => {this.props.auth._register(this.props.navigation)}}>
                                <Text style={{color:'black',fontWeight:'700',fontSize:16}}>{t('signup',{locale:this.props.settings.locale.title})}</Text>
                            </Button>
                        </Content>
                </Container>
            </ImageBackground>
        )
    }
}

const LoginStyle = StyleSheet.create({
    box:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    LoginBox:{
        width:'100%',
        paddingLeft:20,
        paddingRight:20
    },
    button:{
        marginTop:20,
        height:52,
        borderRadius:30,
    },
    register:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    register_text:{
        fontSize:16,
        color:'white',
        textAlign:'center',
        fontWeight:'500',
    },
    forget:{
        position:'absolute',
        bottom:20,
        left:0,
        width:'100%'
    },
    forget_text:{
        color:'#818385',
        textAlign:'center',
        fontSize:16,
        fontWeight:'700'
    }
});