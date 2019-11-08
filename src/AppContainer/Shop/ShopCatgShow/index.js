import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import { colors } from '../../../Common/Colors';
import { Header,Container,Content, Button,Left, Icon } from 'native-base';
import { ItemCard } from '../../../Components';

import {inject,observer} from 'mobx-react'
@inject('settings')
@inject('shop')
@observer
export default class ShopCatgShow extends React.Component {
    render() {
        const locale = this.props.settings.locale.title
        const { width: screenWidth } = Dimensions.get('window')
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}} >
                            <Icon type={'Feather'} name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}}></Icon>
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <View style={{flex:1,
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    alignContent:'center',
                    alignItems:'center'}}>
                        {this.props.shop.selected_catg_items.map((trg,index) => 
                            <View style={{width:'50%',
                            height:screenWidth /2 * 1.4,
                            justifyContent:'center',
                            alignContent:'center',
                            alignItems:'center',
                            alignSelf:'center'}}
                            key={index}>
                                <ItemCard data={trg}  navigation={this.props.navigation}></ItemCard>    
                            </View>
                        )}
                    </View>
                    
                </Content>
            </Container>
        )
    }
}