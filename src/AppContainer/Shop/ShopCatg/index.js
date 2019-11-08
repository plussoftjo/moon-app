import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { Container, Left, Body,Header,Title,Right, Content,Icon } from 'native-base';
import {HlListCatg,CarsoulSlider,TopItems,ShopBottomBar} from '../../../Components';

import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('shop')
@inject('settings')
@observer
export default class ShopCatg extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left><Icon type="Feather" name="menu" style={{color:colors.textColor}} /></Left>
                    <Body><Title style={{color:colors.textColor}}>{locale == 'en'?'Categories':'الفئات'}</Title></Body>
                    <Right/>
                </Header>
                <Content>
                    <View style={{height:20}}></View>
                    {this.props.shop.categores.map((trg,index) => 
                    <TouchableOpacity key={index} style={{borderRadius:15,margin:5,position:'relative'}} onPress={() => {this.props.shop._select_catg(this.props.navigation,trg.id)}}>
                        <Image source={{uri:this.props.settings.serverUri + trg.image}} style={{width:'100%',height:200,borderRadius:15}} resizeMethod="resize" resizeMode="cover" ></Image>
                        <View style={{position:'absolute',left:0,bottom:0,width:'100%',borderRadius:15,backgroundColor:'rgba(35,43,43,0.5)',padding:10}}>
                            <Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:locale == 'en'?22:18,textAlign:'left'}}>
                                {locale == 'en'?trg.name_en:trg.name_ar}
                            </Text>
                        </View>
                    </TouchableOpacity>   
                    )}
                </Content>
                <ShopBottomBar navigation={this.props.navigation}/>
            </Container>
        )
    }
}