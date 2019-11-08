import React from 'react';
import {Container,Content, Header, Left, Button, Icon} from 'native-base';
import {View,Text} from 'react-native';
import {colors} from '../../../Common/Colors'
import {inject,observer} from 'mobx-react'
@inject('auth')
@inject('settings')
@observer
export default class ShopMyOrder extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.navigation.goBack()
                        }} style={{color:colors.background_dark}}><Icon style={{color:colors.textColor}} type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'}/></Button>
                    </Left>
                </Header>
                <Content>
                    {this.props.auth.user.shop_order.map((trg,index) => 
                        <View key={trg.id} style={{marginBottom:10}}>
                        <View style={{backgroundColor:'white',paddingTop:10,paddingBottom:10,paddingLeft:5,borderRadius:5}}>
                            <Text style={{fontWeight:'700'}}>#{trg.id}</Text>
                        </View>
                        <View style={{paddingTop:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View>
                                    <Text>{locale == 'en' ? 'Order Date':'تاريخ الطلب'}</Text>
                                </View>
                                <View><Text>{trg.created_at}</Text></View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                                <View>
                                    <Text>{locale == 'en' ? 'Payment Method':'طريقة الدفع'}</Text>
                                </View>
                                <View><Text>{locale == 'en' ? 'Payment on delivery':'الدفع عند التوصيل'}</Text></View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10}}>
                                <View>
                                    <Text>{locale == 'en' ? 'Total':'الاجمالي'}</Text>
                                </View>
                                <View><Text style={{fontWeight:'700'}}>{trg.net} {locale == 'en' ? 'KWD':'د.ك'}</Text></View>
                            </View>
                        </View>
                    </View>  
                    )}
                </Content>
            </Container>
        )
    }
}