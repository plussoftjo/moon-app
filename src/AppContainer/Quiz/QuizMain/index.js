import React from 'react';
import {Container,Header,Right,Left,Body, Content,Text, Button, Drawer,Icon} from 'native-base';
import {QuizCard} from '../../../Components'
import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
import QuizDrawer from '../../../Components/Drawers/QuizDrawer';
@inject('settings')
@inject('quiz')
@observer
export default class QuizMain extends React.Component{
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
            <Drawer  openDrawerOffset={0.30} panCloseMask={0.35} onClose={() => this.closeDrawer()} ref={(ref) => { this.drawer = ref; }} content={<QuizDrawer closeDrawer={this.closeDrawer} navigation={this.props.navigation} settings={this.props.settings}/>}>
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left><Icon type="Feather" onPress={() => {this.drawer._root.open()}} name="menu" style={{color:colors.textColor}} /></Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Text style={{fontSize:18,fontWeight:'700',padding:15,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',color:colors.textColor}}>{locale == 'en'?'Our Task':'اختباراتنا'}</Text>
                    {this.props.quiz.quizes.map((trg,index) => 
                    <QuizCard key={index} data={trg} navigation={this.props.navigation} colors={colors} locale={locale} />    
                    )}
                </Content>
            </Container>
            </Drawer>
        )
    }
}