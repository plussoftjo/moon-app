import React from 'react';
import {Container,Content, Left,Button, Icon, Text,Header,Body,Right} from 'native-base'
import {View} from 'react-native';
import {inject,observer} from 'mobx-react';
import CourseCard from '../../../Components/CourseCard';
import { colors } from '../../../Common/Colors';
@inject('courses')
@inject('settings')
@inject('auth')
@observer
export default class MyCourses extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left><Button transparent onPress={() => {this.props.navigation.navigate('CoursesMain')}}><Icon style={{color:colors.textColor}} type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'}></Icon></Button></Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Text style={{fontWeight:'700',fontSize:18,padding:15,color:colors.textColor,textAlign:'left',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'My Courses':'دوراتي'}</Text>
                    {this.props.auth.user.course_ticket.length == 0 ?
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Icon type="Feather" name="alert-triangle" style={{color:colors.textColor,fontSize:88}} />
                        <Text style={{color:colors.textColor,fontWeight:'700',textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                            {locale == 'en'?'There Are No Courses you have':'لا يوجد دورات مشترك فيها حاليا '}
                        </Text>
                    </View>
                    :
                    this.props.auth.user.course_ticket.map((trg,index) =>
                        <CourseCard data={trg.course} serverUri={this.props.courses.serverUri} locale={locale} type="MyCourses" colors={colors} key={index} navigation={this.props.navigation} courses={this.props.courses}/>    
                    )
                    }
                </Content>
            </Container>
        )
    }
}