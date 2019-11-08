import React from 'react';
import {Container,Left,Right,Body,Header,Content,Text,Icon, Drawer} from 'native-base';
import {View} from 'react-native';
import {inject,observer} from 'mobx-react';
import {colors} from '../../../Common/Colors';
import CourseCard from '../../../Components/CourseCard';
import CourseDrawer from '../../../Components/Drawers/CourseDrawer'
@inject('courses')
@inject('settings')
@inject('auth')
@observer
export default class Courses extends React.Component {
    constructor(props) {
        super(props);

    };
    componentDidMount() {
        this.closeDrawer();
    }
    closeDrawer = () =>  {
        this.drawer._root.close();
    };
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Drawer  openDrawerOffset={0.30} panCloseMask={0.35} onClose={() => this.closeDrawer()} ref={(ref) => { this.drawer = ref; }} content={<CourseDrawer closeDrawer={this.closeDrawer} navigation={this.props.navigation} settings={this.props.settings}/>}>
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left><Icon type="Feather" onPress={() => {this.drawer._root.open()}} name="menu" style={{color:colors.textColor}} /></Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Text style={{fontWeight:'700',fontSize:18,padding:15,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>{locale == 'en'?'My Courses':'دوراتي'}</Text>
                    {this.props.auth.user.course_ticket.length == 0 ?
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                        <Icon type="Feather" name="alert-triangle" style={{color:colors.textColor,fontSize:88}} />
                        <Text style={{color:colors.textColor,fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                            {locale =='en'?'There Are No Courses you have':'لا تملك اي دورات حاليا'}
                        </Text>
                    </View>
                    :
                    this.props.auth.user.course_ticket.map((trg,index) =>
                        <CourseCard data={trg.course} serverUri={this.props.courses.serverUri} locale={locale} type="MyCourses" colors={colors} key={index} navigation={this.props.navigation} courses={this.props.courses}/>    
                    )
                    }
                    <View style={{height:1,backgroundColor:'rgba(0,0,0,0.1)',width:'100%',borderRadius:0.5,marginTop:15}}></View>
                    <Text style={{padding:15,fontWeight:'700',fontSize:18,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:colors.textColor,textAlign:'left'}}>{locale == 'en'?'Last Courses':'أخر الدورات'}</Text>
                    {this.props.courses.Courses.map((trg,index) => 
                        <CourseCard data={trg} locale={locale} colors={colors} serverUri={this.props.courses.serverUri} key={index} navigation={this.props.navigation} courses={this.props.courses}/>    
                    )}
                </Content>
            </Container>
            </Drawer>
        )
    }
}