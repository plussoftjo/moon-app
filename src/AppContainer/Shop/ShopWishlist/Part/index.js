import React from 'react';
import {View,Text} from 'react-native';
import {Icon,Button} from 'native-base';
import { AppColor } from '../../../../Common/Colors';

export default class NoItems extends React.Component {
    render(){
        let {locale,colors} = this.props;
        return (
            <View style={{height:'100%',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <Icon type="Feather" name="shopping-cart" style={{fontSize:87,color:colors.textColor}} />
                <Text style={{fontSize:24,fontWeight:'700',marginTop:10,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:colors.textColor,textAlign:'center'}}>{locale == 'en'?'You WishList is Empty':'قائمة الرغبات فارغة'}</Text>
                <Text style={{marginTop:20,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:colors.textColor,textAlign:'center'}}>{locale =='en'?'Add a product to the WishList and back to it later':'قم باضافة بعض المواد الى قائمة الرغبات لحفظها لوقت لاحق'}</Text>
                <View style={{paddingLeft:'20%',paddingRight:'20%',width:'100%'}}>
                    <Button onPress={() => {this.props.navigation.navigate('ShopMain')}} style={{marginTop:100}} block rounded light><Text style={{color:'black',fontWeight:'600',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'Shop Now':'تسوق الان'}</Text></Button>
                </View>
            </View>
        )
    }
}