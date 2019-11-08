import React from 'react';
import {View,Text} from 'react-native';
import {Icon,Button} from 'native-base';
import {StepOrderStyle} from './style';
import {inject,observer} from 'mobx-react';
@inject('cart')
@observer
export default class StepOrder extends React.Component{
    render() {
        let {locale,colors} = this.props;
        return (
            <View>
                <View style={{height:'73%', padding:10}}>
                    <View style={{paddingTop:40}}>
                        <Icon type="FontAwesome5" name="check-circle" style={[StepOrderStyle.Icons,{color:colors.textColor}]}/>
                    </View>
                    <View style={{paddingTop:40}}>
                        <Text style={[StepOrderStyle.thank,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>{locale == 'en'?'Your order has been requested':'تم استلام طلبك بنجاح'}</Text>
                    </View>
                    <View style={{paddingTop:22}}>
                        <Text style={[StepOrderStyle.thankContent,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>
                            {locale == 'en'?'Thank you so much for your purchased, to check your delivery status please go to Orders List':'شكرا لك لاختيار خدماتنا , لمتابعة الطلب الرجاء الانتقال الى قائمة الطلبات'}
                        </Text>
                    </View>
                </View>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
                    <Button light rounded style={{width:200,flexDirection:'row',justifyContent:'center'}} onPress={() => {
                        this.props.cart.items = [];
                        
                        this.props.navigation.navigate('ShopMyOrder')
                        }}><Text style={{color:'black',textAlign:'center',fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'My Orders':'طلباتي'}</Text></Button>
                </View>
            </View>
        )
    }
}