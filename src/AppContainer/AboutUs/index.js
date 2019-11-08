import React from 'react';
import {Container,Content, Header, Left, Icon, Button} from 'native-base';
import {View,Text} from 'react-native';
import { colors } from '../../Common/Colors';
import {inject,observer} from 'mobx-react'
@inject('settings')
@observer
export default class AboutUs extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                            <Icon type={'Feather'} style={{color:colors.textColor}} name={locale == 'en'?'arrow-left':'arrow-right'}></Icon>
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <View style={{paddingTop:30}}>
                        <Text style={{color:'white',fontSize:30,textAlign:'center',fontFamily:'CairoBold'}}>
                            تطبيق Moon World
                        </Text>
                    </View>
                    <View style={{padding:30}}>
                        <Text style={{color:'white',fontSize:14,textAlign:locale == 'en'?'right':'left',fontFamily:'CairoBold'}}>
                            يقدم التطبيق العديد من الخدمات التي تخص الاستشارات النفسية والالعاب النفسية التي تهم اي شخص في الحياة اليومية
                        </Text>
                        <Text style={{color:'white',fontSize:14,textAlign:locale == 'en'?'right':'left',fontFamily:'CairoBold'}}>
                            يسهل عليك التطبيق عملية تواصلك مع طبيبك النفسي مع خدمات موسعه
                        </Text>
                        <Text style={{color:'white',fontSize:14,textAlign:locale == 'en'?'right':'left',fontFamily:'CairoBold'}}>
                            يقدم لك التطبيق ايضا مجموعة من خدمات شراء الملابس او الكتب المختارة لك
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}