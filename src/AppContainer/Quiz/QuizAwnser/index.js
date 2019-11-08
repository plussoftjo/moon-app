import React from 'react';
import { Container, Content,Header,Left,Button,Icon } from 'native-base';
import { colors } from '../../../Common/Colors';
import {View,Text} from 'react-native';

import {inject,observer} from 'mobx-react';

@inject('auth')
@inject('settings')
@observer
export default class QuizAwnser extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <Container>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.navigate('QuizMain')}}><Icon type="Feather" name={locale=='en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                </Header>
                <Content>
                    {this.props.auth.user.quiz_admin_awnser.map((trg,index) => 
                     <View style={{margin:15,borderRadius:5,borderColor:'grey',borderWidth:1}} key={index}>
                        <View style={{backgroundColor:'grey',padding:5}}>
                            <Text style={{color:'white',fontFamily:'Roboto_medium'}}>
                                ID:{trg.id}
                            </Text>
                        </View>
                        <View style={{padding:5}}>
                            <Text style={{fontWeight:'700',fontFamily:locale == 'en'?'Roboto_medium':'CairoBold'}}>
                                {trg.quiz.name_ar}
                            </Text>
                            <View style={{marginTop:10,height:1,backgroundColor:'grey'}}></View>
                        </View>
                        <View style={{padding:10}}>
                            <Text style={{fontWeight:'700',fontFamily:locale == 'en'?'Roboto_medium':'CairoBold'}}>
                                {trg.awnser}
                            </Text>
                        </View>
                    </View>   
                    )}
                </Content>
            </Container>
        )
    }
}