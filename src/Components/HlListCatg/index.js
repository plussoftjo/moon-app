import React from 'react';
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import {inject,observer} from 'mobx-react';
@inject('shop')
@observer
export default class HlListCatg extends React.Component {
    render() {
        let locale = this.props.locale;
        let colors = this.props.colors;
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:5}} >
                {this.props.items.map((trg,index) => 
                <TouchableOpacity key={index} onPress={() => {
                    this.props.shop._select_catg(this.props.navigation,trg.id)
                }}>
                    <View style={{padding:10,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Image source={{uri:this.props.serverUri + trg.image}} style={{width:80,height:80,borderRadius:40}}   />
                        <Text style={{padding:3,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'BigShouldersDisplayExtraBold',fontSize:16,color:colors.textColor}}>{locale == 'en'?trg.name_en:trg.name_ar}</Text>
                    </View>
                </TouchableOpacity>  
                )}
            </ScrollView>
        )
    }
}