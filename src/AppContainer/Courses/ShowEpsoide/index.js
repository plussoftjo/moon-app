import React from 'react'
import {Container,Content, Header, Left, Button, Icon, Body, Right} from 'native-base';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';

@inject('courses')
@inject('settings')
@observer
export default class ShowEpsoide extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        let epsoide = this.props.courses.epsoide;
        console.log(epsoide)
        return (
            <Container>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <View style={{height:300,width:'100%',minHeight:300}}>
                {this.props.courses.show_epsoide &&
                    <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: 'contain',
                        source: {
                        uri:epsoide.video,
                        width:'100%',
                        height:300
                        },
                    }}
                    inFullscreen={true}
                    switchToLandscape={() => {
                        console.log('switch')
                    }}
                    height={300}
                    />
                }
                </View>
                <Content>
                    {this.props.courses.selected_my_course.course_epsoide.map((trg,index) => 
                          <TouchableOpacity key={index} style={{marginLeft:5,marginRight:5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:index == this.props.courses.epsoide_index ? 'blue':colors.textColor}} onPress={() => {this.props.courses._select_epsoide(trg,this.props.navigation)}} >
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
            </Container>
        )
    }
}