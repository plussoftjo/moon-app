import React from 'react';
import {View,Text,ScrollView,Dimensions} from 'react-native';
import {Icon,Container} from 'native-base'
import {StepCartStyle} from './style';
import {CartItem,CartBottomMethods} from '../../../../../Components';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {colors} from '../../../../../Common/Colors';
import {inject,observer} from 'mobx-react';
@inject('cart')
@observer
export default class StepCart extends React.Component {
    render() {
        let {locale,colors} = this.props;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <View style={StepCartStyle.box}>
                    <View style={{paddingTop:5 }}></View>
                    <Grid>
                        <Col>
                            <Text style={[StepCartStyle.title,{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left',fontSize:locale == 'en'?20:16}]}>
                                {locale == 'en'?'Total Price:':'المجموع :'}
                            </Text>
                        </Col>
                        <Col>
                            <Text style={StepCartStyle.price}>
                                {this.props.cart.netPrice} KWD
                            </Text>
                        </Col>
                    </Grid>
                    <View style={{paddingTop:30}}></View>
                        <ScrollView style={{height:Dimensions.get('window').height /1.55}}>
                                <CartItem locale={locale} colors={colors} />
                            <View style={{paddingTop:60}}></View>
                        </ScrollView>
                </View>
                    <View style={{position:'absolute',bottom:0,left:0,width:'100%'}}>
                        <CartBottomMethods cart={this.props.cart} locale={locale} colors={colors} navigation={this.props.navigation} />
                    </View>
            </Container>
            
        )
    }
}