import React from 'react';
import {View,Text} from 'react-native';
import { StepPaymentStyle } from './style';
import { Item,  Picker,Icon,Content } from 'native-base';
import {CartItem,CartBottomMethods} from '../../../../../Components';
import {inject,observer} from 'mobx-react';
import { LinearGradient } from 'expo-linear-gradient';
import {AppColor} from '../../../../../Common/Colors'

@inject('cart')
@observer
export default class StepPayment extends React.Component {
    constructor(props){
        super(props);
        this.state = {coin:''}
    }
    render() {
        let {locale,colors} = this.props;
        return (
            <View>
               <View style={StepPaymentStyle.box}>
                    <Content>
                        <Text style={[StepPaymentStyle.title,{textAlign:'left',color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>
                            {locale == 'en'?'Payment Method:':'طريقة الدفع :'}
                        </Text>
                        <LinearGradient style={{height:110 /1.5,width:110,borderRadius:8,justifyContent:'center',alignItems:'center',alignContent:'center',borderColor:AppColor.MainActive,borderWidth:1}} colors={[AppColor.MainActive, '#2196F3']}  >
                            <Text style={{color:'white',fontWeight:'600',fontSize:14,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}}>{locale == 'en'?'Cash on delivery':'الدفع عند التوصيل'}</Text>
                        </LinearGradient>
                        <View style={StepPaymentStyle.TotalBox}>
                            <View style={StepPaymentStyle.stepBox}>
                                <Text style={[StepPaymentStyle.priceTitle,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>{locale == 'en'?'Subtotal':'مجموع جزئي'}</Text>
                                <Text style={[StepPaymentStyle.price,{color:colors.textColor}]}>{this.props.cart.netPrice} KWD</Text>
                            </View>
                            <View style={StepPaymentStyle.stepBox}>
                                <Text style={[StepPaymentStyle.priceTitle,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>{locale == 'en'?'Delivery':'التوصيل'}</Text>
                                <Text style={[StepPaymentStyle.price,{color:colors.textColor}]}>0 KWD</Text>
                            </View>
                            <View style={StepPaymentStyle.hr}></View>
                            <View style={StepPaymentStyle.stepBox}>
                                <Text style={[StepPaymentStyle.priceTitle,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>{locale == 'en'?'Total':'المجموع'}</Text>
                                <Text style={[StepPaymentStyle.price,{color:colors.textColor}]}>{this.props.cart.netPrice} KWD</Text>
                            </View>
                        </View>
                    </Content>
               </View>
               <CartBottomMethods cart={this.props.cart} locale={locale} colors={colors} type="complate"/>

            </View>
        )
    }
}