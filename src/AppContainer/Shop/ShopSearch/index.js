import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Item,Input,Icon,Container} from 'native-base';
import {SearchStyle} from './style';
import {ItemCard,ShopBottomBar} from '../../../Components'

import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('shop')
@inject('settings')
@observer
export default class ShopSearch extends React.Component {
    state = {search:false}
    render() {
        let locale = this.props.settings.locale.title;
        const fetchProudct = this.props.shop.search_result.map((fetch,index) => 
            <View style={SearchStyle.intinalBox} key={index}>
                <ItemCard data={fetch} navigation={this.props.navigation} locale={locale} colors={colors}/>
            </View>
        );
        return (
            <Container style={[SearchStyle.box,{backgroundColor:colors.background_dark}]}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignContent:'center',paddingLeft:15,paddingRight:15}}>
                    <View style={{width:'100%'}}>
                        <Item rounded style={SearchStyle.formStyle}>
                            <Icon active name='search' type="Feather" style={{color:'black'}} />
                            <Input placeholder={locale=='en'?'Search proudect with name':'ابحث عن المواد من خلال الاسم'} style={{textAlign:locale == 'en'?'left':'right'}} placeholderTextColor='black' onChangeText={(value) => this.props.shop._search(value)}/>
                        </Item>
                    </View>
                </View>
                
                <View style={{paddingTop:15}}></View>
                
                {this.props.shop.search_result.length != 0 && this.props.shop.searched?
                <ScrollView showsHorizontalScrollIndicator={false}  keyboardShouldPersistTaps='handled'>
                    <View style={SearchStyle.ResultLayout}>
                        {fetchProudct}
                    </View>
                </ScrollView>
                :null
                }
                
                {!this.props.shop.searched &&
                <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Icon type="EvilIcons" name="search" style={{fontSize:128,textAlign:'center',color:colors.textColor}}></Icon>
                        <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'You can search with proudect name':'يمكنك البحث من خلال اسم المادة'}</Text>
                    </View>
                </View>
                }
                {this.props.shop.search_result.length == 0 && this.props.shop.searched ?
                <View style={{flex:1,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Icon type="AntDesign" name="frowno" style={{fontSize:128,textAlign:'center',color:colors.textColor}}></Icon>
                        <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'No Result, try again.':'لا يوجد نتائج , حاول مجددا'}</Text>
                    </View>
                </View>
                :null}
                <ShopBottomBar navigation={this.props.navigation}/>
            </Container>
        )
    }
}