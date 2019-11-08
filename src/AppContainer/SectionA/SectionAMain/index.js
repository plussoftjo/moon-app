import React from 'react';
import {View,Image,Dimensions,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content,Text } from 'native-base';


import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('settings')
@inject('sectiona')
@observer
export default class SectionAMain extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                    </Left>
                    <Body>
                        <Title style={{color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.settings.locale.title == 'en'?'Consulting':'الاستشارات'}</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        {this.props.sectiona.categores.map((trg,index) => 
                        <TouchableOpacity onPress={() => {this.props.sectiona._select_catg(trg,this.props.navigation)}} style={{width:'50%',justifyContent:'center',alignItems:'center',marginTop:20}} key={index}>
                            <Image source={{uri:this.props.sectiona.serverUri + trg.image}} style={{height:Dimensions.get('window').height * 0.17,width:'100%'}} resizeMode ="contain" />
                            <Text style={{paddingTop:3,fontWeight:'600',fontSize:18,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplay':'CairoRegular',color:colors.textColor}}>{this.props.settings.locale.title == 'en'?trg.name_en:trg.name_ar}</Text>
                        </TouchableOpacity>   
                        )}
                    </View>
                    <View style={{marginTop:20,marginBottom:5,height:1,backgroundColor:colors.textColor}}></View>
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('MyTickets')}} style={{width:'50%',justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Image source={require('../../../Images/sectiona/my.png')} style={{height:Dimensions.get('window').height * 0.17}} resizeMode ="contain" />
                            <Text style={{paddingTop:3,fontWeight:'600',fontSize:18,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplay':'CairoRegular',color:colors.textColor}}>{this.props.settings.locale.title == 'en'?'My Ticket':'تذاكري'}</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('AppMainScreen')}} style={{width:'50%',justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Image source={require('../../../Images/sectiona/back.png')} style={{height:Dimensions.get('window').height * 0.17}} resizeMode ="contain" />
                            <Text style={{paddingTop:3,fontWeight:'600',fontSize:18,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplay':'CairoRegular',color:colors.textColor}}>{this.props.settings.locale.title == 'en'?'Back to home':'الرجوع للرئيسية'}</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={{height:30}}></View>
                </Content>
            </Container>
        )
    }
}