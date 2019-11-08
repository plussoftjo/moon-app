import React from 'react';
import {Container,Content, Header, Left, Button, Icon, Body, Right} from 'native-base';
import {View,Image,Text,TouchableOpacity} from 'react-native'
import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('courses')
@inject('settings')
@observer
export default class CourseShow extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <View style={{height:'88%',marginLeft:10,marginRight:10,marginTop:10,paddingBottom:10,borderRadius:10,borderColor:'rgba(255,255,255,0.9)',borderWidth:1,backgroundColor:'rgba(255,255,255,0.9)'}}>
                    <Content>
                        <Image source={{uri:this.props.courses.serverUri + this.props.courses.selected_my_course.image}} style={{width:'100%',height:150,borderRadius:10}}/>
                        <Text style={{fontWeight:'700',fontSize:20,textAlign:'center',paddingTop:10}}>
                            {locale == 'en'? this.props.courses.selected_my_course.name_en:this.props.courses.selected_my_course.name_ar}
                        </Text>
                        <View style={{height:1,backgroundColor:'rgba(0,0,0,0.1)',width:'100%',borderRadius:1,marginTop:10}}></View>
                        <Text style={{padding:15,fontWeight:'700',fontSize:18,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}}>{locale == 'en'?'Epsoides':'حلقات الدورة'}</Text>
                        {this.props.courses.selected_my_course.course_epsoide.map((trg,index) => 
                          <TouchableOpacity key={index} style={{marginLeft:5,marginRight:5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:colors.textColor}} onPress={() => {this.props.courses._select_epsoide(trg,this.props.navigation)}} >
                          <View style={{flexDirection:'row'}}>
                              <View style={{width:'40%'}}>
                                  <Image source={{uri:this.props.courses.serverUri + trg.image}} style={{width:'100%',height:125,borderRadius:10}} />
                              </View>
                              <View style={{width:'60%',padding:5}}>
                                  <Text style={{fontWeight:'700',fontSize:14,color:'black',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}}>{locale == 'en'?'Epsoide ':'الحلقة '}{index + 1}: {locale == 'en'?trg.name_en:trg.name_ar}</Text>
                                  <Text style={{color:'rgba(0,0,0,0.3)',fontSize:12,paddingTop:5,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>
                                        {locale == 'en'?trg.description_en:trg.description_ar}
                                  </Text>
                                  <View style={{position:'absolute',bottom:0,right:0,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'center'}}><Text>{locale == 'en'?trg.duration + 'Min':trg.duration + ' دقيقة'}</Text></View>
                              </View>
                          </View>
                          </TouchableOpacity>  
                        )}
                    </Content>
                </View>
            </Container>
        )
    }
}