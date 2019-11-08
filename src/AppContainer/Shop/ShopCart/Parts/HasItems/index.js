import React from 'react';
import {View,Text} from 'react-native';
import {Steps} from '../../../../../Components';
import StepIndicator from 'react-native-step-indicator';
import {StepCart,StepDelivery,StepPayment,StepOrder} from '../index';
import {Container} from 'native-base';
import {inject,observer} from 'mobx-react';
import { colors } from '../../../../../Common/Colors';
@inject('cart')
@observer
export default class HasItems extends React.Component {
    render(){
        const labels = this.props.locale == 'en'?["Cart","Delivery Address","Payment Method","Order"]:["الحقيبة","معلومات التوصيل","طريقة الدفع","الطلب"];
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Steps labels={labels} locale={this.props.locale} colors={this.props.colors} currentPage={this.props.cart.screen}/>
                {this.props.cart.screen == 0 && 
                    <StepCart cart={this.props.cart} locale={this.props.locale} colors={this.props.colors} navigation={this.props.navigation}/>
                }
                {this.props.cart.screen == 1 && 
                    <StepDelivery cart={this.props.cart} locale={this.props.locale} colors={this.props.colors}/>
                }
                {this.props.cart.screen == 2 && 
                    <StepPayment cart={this.props.cart} locale={this.props.locale} colors={this.props.colors}/>
                }
                {this.props.cart.screen == 3 && 
                    <StepOrder cart={this.props.cart} locale={this.props.locale} colors={this.props.colors} navigation={this.props.navigation}/>
                }
            </Container>
        )
    }
}