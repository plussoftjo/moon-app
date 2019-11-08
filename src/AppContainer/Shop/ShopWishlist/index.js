import React from 'react';
import {View,Text,Image,Dimensions, ScrollView,TouchableOpacity} from 'react-native';
import {Button, Col, Row, Grid,Header,Right,Left,Body,Container} from 'native-base';
import {CartItemStyle} from './style';
import {ShopBottomBar} from '../../../Components'
const { width: screenWidth } = Dimensions.get('window')
import {inject,observer} from 'mobx-react';
import NoItems from './Part';
import { colors } from '../../../Common/Colors';
@inject('cart')
@inject('shop')
@inject('settings')
@observer
export default class WishList extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>

                </Header>
                {this.props.cart.wishlist.length == 0 &&
                    <NoItems locale={locale} colors={colors} navigation={this.props.navigation}/>
                }
                <View style={{paddingTop:20,flex:1}}>
                    <ScrollView>
                        {this.props.cart.wishlist.map((trg,index) => 
                        <TouchableOpacity onPress={() => this.props.shop._select_item(this.props.navigation,trg)}  key={index} style={{backgroundColor:'rgba(0,0,0,0.03)',borderBottomColor:'black',borderBottomWidth:1,height:screenWidth / 2.3,marginBottom:20}}>
                            <Grid>
                                <Col>
                                    <Image source={{uri:this.props.settings.serverUri + trg.image}} style={CartItemStyle.image}/>
                                </Col>
                                <Col>
                                <View style={CartItemStyle.detailsBox}>
                                    <Text style={[CartItemStyle.title,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}]}>{locale == 'en'?trg.name_en:trg.name_ar}</Text>
                                    <Text style={[CartItemStyle.price,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}]}>{trg.price} KWD</Text>
                                </View>
                                </Col>
                            </Grid>
                        </TouchableOpacity>
                        )}
                        <View style={{height:100}}></View>
                    </ScrollView>
                    {this.props.cart.wishlist &&
                    <View style={{position:'absolute',bottom:0,left:0,width:'100%',height:70}}>
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <View style={{width:'45%',marginLeft:4,marginRight:4}}>
                                <Button rounded block style={{backgroundColor:'#F44336'}} onPress={() => {this.props.cart.wishlist = []}}>
                                    <Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Clear All':'حذف الكل'}</Text>
                                </Button>
                            </View>
                            <View style={{width:'45%',marginRight:4,marginLeft:4}}>
                                <Button rounded block dark onPress={() => this.props.cart._addAllTo_cart(this.props.navigation)}>
                                    <Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Add All to Cart':'اضافة الكل الى الحقيبة'}</Text>
                                </Button>
                            </View>
                        </View>
                    </View>                        
                    }
                </View>
                <ShopBottomBar navigation={this.props.navigation}/>
            </Container>
        )
    }
}