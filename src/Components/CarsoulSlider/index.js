import React, {Component} from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet,Platform,View,Text,Image,TouchableOpacity } from 'react-native';
import {CarouslSnapStyle} from './style';
const { width: screenWidth } = Dimensions.get('window')
import {inject,observer} from 'mobx-react';
@inject('shop')
@observer
export default class CarouslSnap extends Component {
    constructor(props) {
        super(props);
        
        this._renderItem = this._renderItem.bind(this)
        state = {
            hasTitle:props.hasTitle
        }
    }
    _renderItem ({item, index}, parallaxProps) {
        const self = this;
        return (
            <View style={CarouslSnapStyle.item}>
                <ParallaxImage
                    source={{uri:this.props.shop.serverUri + item.image}}
                    containerStyle={CarouslSnapStyle.imageContainer}
                    style={[CarouslSnapStyle.image]}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                        <TouchableOpacity style={CarouslSnapStyle.titleCover} onPress={() => self.props.shop._select_item(self.props.navigation,item)}>
                            <Text style={{color:self.props.colors.textColor,fontSize:16,fontFamily:self.props.locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}} numberOfLines={2}>
                                { self.props.locale == 'en'?item.name_en:item.name_ar }
                            </Text>
                        </TouchableOpacity>
            </View>
        );
    }

    render () {
        return (
            <View style={{marginTop:20}}>
                <Text style={{fontSize:22,fontWeight:'600',paddingLeft:25,paddingRight:25,textAlign:'left',paddingBottom:5,color:this.props.colors.textColor,fontFamily:this.props.locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.locale == 'en'?'We made the choice for you':'قمنا بالاختيار لك'}</Text>
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={300}
                data={this.props.data}
                itemWidth={screenWidth -60}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
            </View>
            
        );
    }
}