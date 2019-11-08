import React from 'react';
import {View,Text} from 'react-native';
import {Button,Container} from 'native-base';
import {CartStyle} from './style';
import {Steps,ShopBottomBar} from '../../../Components';

import {StepCart,StepDelivery,StepPayment,StepOrder} from './Parts'

import {inject,observer} from 'mobx-react';
import NoItems from './Parts/NoItems';
import HasItems from './Parts/HasItems';
import { colors } from '../../../Common/Colors';
@inject('cart')
@inject('settings')
@observer
export default class Cart extends React.Component{
    render() {
        const labels = ["Cart","Delivery Address","Payment Method","Order"];
        let locale = this.props.settings.locale.title;
        return (
            <Container style={[CartStyle.box,{backgroundColor:colors.background_dark}]}>
                {this.props.cart.items.length == 0 ?
                <NoItems navigation={this.props.navigation} locale={locale} colors={colors}/>
                :
                <HasItems navigation={this.props.navigation} locale={locale} colors={colors} />
                }
                <ShopBottomBar navigation={this.props.navigation} locale={locale} colors={colors}/>
            </Container>
        )
    }
}