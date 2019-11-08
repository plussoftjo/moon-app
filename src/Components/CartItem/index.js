import React from 'react';
import {View,Text,Image,Dimensions} from 'react-native';
import {CartItemStyle} from './style'
import {Button,Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import NumericInput from 'react-native-numeric-input'
import Qty from '../Qty'
import {inject,observer} from 'mobx-react';
@inject('cart')
@observer
export default class CartItem extends React.Component {
    render() {
        const { width: screenWidth } = Dimensions.get('window')
        let {locale,colors} = this.props;
        return (
            <View>
            {this.props.cart.items.map((trg,index) => 
              <View style={CartItemStyle.box} key={index}>
              <Grid>
                  <Col>
                       <Image source={{uri:this.props.cart.serverUri + trg.image}} style={CartItemStyle.image}/>
                  </Col>
                  <Col>
                   <View style={CartItemStyle.detailsBox}>
                       <Text style={[CartItemStyle.title,{color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}]}>{locale =='en'?trg.title:trg.title}</Text>
                       <Text style={[CartItemStyle.price,{color:colors.textColor,fontFamily:'BigShouldersDisplay',textAlign:'left'}]}>{trg.netPrice} KWD</Text>
                       <View style={CartItemStyle.deleteIcon}>
                       <Button transparent onPress={() => {this.props.cart._remove_from_list(trg)}}>
                           <Icon name='trash-2' type="Feather" style={{color:'#F44336'}} />
                       </Button>
                       </View>
                       <View style={CartItemStyle.QtyBox}>
                       <NumericInput 
                           value={trg.qty}
                           minValue={1}
                           maxValue={10}
                           onChange={(number) => {this.props.cart._change_qty(trg,number)}}
                           rounded 
                           textColor={colors.textColor}
                           iconStyle={{ color: 'black' }} 
                           rightButtonBackgroundColor={colors.textColor}
                           leftButtonBackgroundColor={colors.textColor}
                           totalWidth={screenWidth / 2.5} 
                           totalHeight={35}
                           />
                       </View>
                   </View>
                  </Col>
              </Grid>
              </View>  
            )}                
            </View>
        )
    }
}