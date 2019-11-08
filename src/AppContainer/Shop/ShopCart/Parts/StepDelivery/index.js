import React from 'react';
import {View,Text} from 'react-native';
import {StepDeliveryStyle} from './style';
import {Container, Header, Content, Form, Item, Input, Label, Picker,Icon } from 'native-base';
import {AppColor} from '../../../../../Common/Colors'
import { LinearGradient } from 'expo-linear-gradient';
import {CartItem,CartBottomMethods} from '../../../../../Components';
import {inject,observer} from 'mobx-react';
@inject('cart')
@inject('settings')
@observer
export default class StepDelivery extends React.Component {
    render() {
        let {locale,colors} = this.props;
        return (
            <View>
                <View style={StepDeliveryStyle.box}>
                    <Content>
                        <View>
                            <Text style={[StepDeliveryStyle.title,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}]}>{locale=='en'?'Shipping method':'التوصيل'}</Text>
                            <View style={{paddingLeft:30,flexDirection:'row'}}>
                                <LinearGradient style={{height:110,width:110,borderRadius:15,justifyContent:'center',alignItems:'center',alignContent:'center',borderColor:AppColor.MainActive,borderWidth:1}} colors={[AppColor.MainActive, '#2196F3']}  >
                                    <Text style={{color:'white',fontWeight:'600',fontSize:18,fontFamily:'BigShouldersDisplayExtraBold'}}>{this.props.settings.ship_payment.ship}JD</Text>
                                    <Text style={{color:'white',paddingTop:10,fontSize:12,fontFamily:'BigShouldersDisplayExtraBold'}}>To {this.props.settings.ship_payment.city}</Text>
                                    <Text style={{color:'white',paddingTop:15,fontSize:12,fontFamily:'BigShouldersDisplayExtraBold'}}>1 - 3 Days</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    <Text style={[StepDeliveryStyle.title,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}]}>{locale == 'en'?'You Delivery Info':'قم بادخال معلوماتك'}</Text>
                    <Form>
                        {this.props.cart.form_has_error &&
                            <Text style={{color:'red',padding:15,fontWeight:'600',fontSize:16}}>Please Complate The Form</Text>
                        }
                        {this.props.cart.form.map((trg,index) => {
                            if(trg.title == 'City') {
                                return (
                                    <Item picker stackedLabel key={index}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined }}
                                        placeholder="City"
                                        placeholderStyle={{ color: "white" }}
                                        placeholderIconColor="white"
                                        selectedValue={this.props.settings.selected_city}
                                        onValueChange={(value,index) => {this.props.settings._change_city(value)}}
                                    >
                                        {this.props.settings.citys.map((trg,index) => 
                                            <Picker.Item label={trg.title} placeholderIconColor="white" placeholderTextColor="white" key={index} value={trg.title} />
                                        )}
                                    </Picker>
                                    </Item>
                                )
                            }
                            return (
                                <Item stackedLabel key={index} error={trg.error}>
                                    <Label style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?trg.title:trg.title_ar}</Label>
                                    <Input onChangeText={(value) => {trg.value = value}} value={trg.value} placeholderTextColor="white" />
                                </Item>
                            )
                        }
                        )}
                        <View style={{height:40}}></View>
                    </Form>
                </Content>
                </View>
                <View style={{position:'absolute',bottom:0,left:0,width:'100%'}}>
                    <CartBottomMethods cart={this.props.cart} locale={locale} colors={colors}/>
                </View>
            </View>
        )
    }
}