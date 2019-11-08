import React from 'react';
import {View,Text,ScrollView,Image,Dimensions} from 'react-native';
import {TopItems,BottomMethods,ItemTaps} from '../../../Components';
import {ItemStyle} from './style';
import NumericInput from 'react-native-numeric-input'
/*--Mobx--*/
import {inject,observer} from 'mobx-react';
import { Left,Header,Right,Body, Button ,Icon,Container} from 'native-base';
import { colors } from '../../../Common/Colors';
@inject('shop')
@inject('settings')
@observer
export default class Item extends React.Component {
    constructor(props){
        super(props);

        this.state = {qty:1};
    }
    render() {
        let locale = this.props.settings.locale.title;
        const { width: screenWidth } = Dimensions.get('window')
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <View style={{height:15}}></View>
                <ScrollView scrollsToTop={true}   ref={ref => this.scrollview = ref}>
                        <Image source={{uri:this.props.shop.serverUri + this.props.shop.selected_item.image}} style={{width:'100%',height:300}} resizeMode="contain" />
                        <Text style={[ItemStyle.name,{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}]}>
                            {locale=='en'?this.props.shop.selected_item.name_en:this.props.shop.selected_item.name_ar}
                        </Text>
                        <Text style={ItemStyle.price}>
                            {this.props.shop.selected_item.price}KWD
                        </Text>
                        <View style={{marginTop:30,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <NumericInput 
                            value={this.state.qty}
                            minValue={1}
                            maxValue={10}
                            onChange={(number) => {this.setState({qty:number})}}
                            rounded 
                            textColor={colors.textColor} 
                            iconStyle={{ color: 'white' }} 
                            rightButtonBackgroundColor={colors.textColor} 
                            leftButtonBackgroundColor={colors.textColor} 
                            totalWidth={screenWidth / 2} 
                            totalHeight={40}
                            />
                        </View>
                        <ItemTaps locale={locale} colors={colors}/>

                        <TopItems type="DefaultLayout" data={this.props.shop.t_items} colors={colors} locale={locale} navigation={this.props.navigation} HeaderTitle={{title:'You May Also Like'}}/>
                        <View style={{paddingTop:150}}></View>
                </ScrollView>
                <BottomMethods item={this.props.shop.selected_item} qty={this.state.qty} navigation={this.props.navigation} locale={locale}/>
            </Container>
        );
    }
}