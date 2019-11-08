import React from 'react';
import {View,Text} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Button,Icon,Root} from 'native-base';
import {BottomMethodsStyle} from './style';
import {inject,observer} from 'mobx-react';
@inject('cart')
@observer
export default class BottomMethods extends React.Component{
    constructor(props){
        super(props);
        props.cart.wishlist.forEach(trg => {
            if(trg.id == props.item.id){
                this.state = {fav:true};
            }else {
                this.state = {fav:false};
            }
        });
        if(props.cart.wishlist.length == 0) {
            this.state = {fav:false};
        }
    }
    render() {
        return (
            <View>
                <View style={BottomMethodsStyle.box}>
                    <Grid>
                        <Col>
                            <Grid>
                                {this.state.fav ? 
                                <Col style={BottomMethodsStyle.ColToCenter}>
                                <Icon name='heart' type="Entypo" style={{color:'pink'}} onPress={()=> {this.props.cart._delete_wishlist(this.props.item); this.setState({fav:!this.state.fav})}} />
                                </Col>
                                :
                                <Col style={BottomMethodsStyle.ColToCenter}>
                                <Icon name='heart' type="Feather" style={{color:'pink'}} onPress={()=> {this.props.cart._store_wishlist(this.props.item); this.setState({fav:!this.state.fav})}} />
                                </Col>
                                }
                                
                                <Col style={BottomMethodsStyle.ColToCenter}>
                                <Icon name='share-2' type="Feather" style={{color:'pink'}} />
                                </Col>
                            </Grid>
                        </Col>
                        <Col >
                            <Button dark block large style={{borderRadius:0}} onPress={() => this.props.cart._store(this.props.navigation,this.props.item,this.props.qty)}><Text style={{color:'white',fontWeight:'700',fontSize:16,fontFamily:this.props.locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.locale == 'en'?'Add To Bag':'اضافة الى الحقيبة'}</Text></Button>
                        </Col>
                    </Grid>
                </View>
            </View>

        )
    }
}