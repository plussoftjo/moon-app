import React from 'react';
import {View,Text,Image,TouchableOpacity,Dimensions} from 'react-native';
import {Spinner,Icon} from 'native-base';
import {ItemCardStyle} from './style';
const { width: screenWidth } = Dimensions.get('window')
/*--Mobx--*/
import {inject,observer} from 'mobx-react';
@inject('shop')
@observer
export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {load:false}
    }
    render() {
        let {shop,navigation,colors,locale,data} = this.props;
        return (
            <TouchableOpacity onPress={() => this.props.shop._select_item(this.props.navigation,this.props.data)}>
            <View style={ItemCardStyle.box}>
                <Image source={{uri:this.props.shop.serverUri + this.props.data.image}} style={ItemCardStyle.image} onLoad={() => {this.setState({load:true})}}></Image>
                {!this.state.load &&
                <View style={{width:screenWidth / 2.5,position:'absolute',left:0,right:0,bottom:0,top:0,height:screenWidth /2.5 * 1.3,justifyContent:'center',alignItems:'center',alignContent:'center',backgroundColor:'rgba(225, 228, 232,0.2)'}}>
                    <Image source={{uri:this.props.shop.serverUri + data.image}} style={{width:100,height:50}} resizeMode="contain" />
                    <Spinner color="black" />
                </View>                
                }
                <View style={{position:'absolute',right:0,top:0}}>
                    <Icon type="Feather" name="heart" style={{color:'pink',fontSize:26}} />
                </View>
                <Text style={[ItemCardStyle.title,{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>
                    {locale == 'en'?data.name_en:data.name_ar}
                </Text>
                <Text style={ItemCardStyle.price}>
                    {data.price}KWD
                </Text>
            </View>
            </TouchableOpacity>

        )
    }
}