import React from 'react';
import {View,Text} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Button,Icon} from 'native-base';
import {CartBottomMethodsStyle} from './style';
import {inject,observer} from 'mobx-react';
@inject('cart')
@inject('auth')
@observer
export default class CartBottomMethods extends React.Component{
    render() {
        let {locale,colors} = this.props;
        return (
            <View style={CartBottomMethodsStyle.box}>
                <Grid>
                    <Col>
                    {this.props.cart.screen == 0 ? 
                    <Button light block full large style={{borderRadius:0}} onPress={() => {this.props.navigation.goBack()}}><Text style={{color:'black',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:locale=='en'?18:16}}>{locale == 'en'?'Back':'رجوع'}</Text></Button>
                    :
                    <Button light block full large style={{borderRadius:0}} onPress={() => {this.props.cart._change_screen('down')}}><Text style={{color:'black',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:locale=='en'?18:16}}>{locale == 'en'?'Back':'رجوع'}</Text></Button>
                    }
                    </Col>
                    <Col >
                    {this.props.type == 'complate' ? 
                        <Button dark block full large style={{borderRadius:0}} onPress={() => {this.props.cart._complate_cart(this.props.auth.user.id)}}><Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:locale=='en'?18:16}}>{locale == 'en'?'Next':'التالي'}</Text></Button>
                        :
                        <Button dark block full large style={{borderRadius:0}} onPress={() => {this.props.cart._change_screen('up')}}><Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:locale=='en'?18:16}}>{locale == 'en'?'Next':'التالي'}</Text></Button>
                    }
                    </Col>
                </Grid>
            </View>
        )
    }
}