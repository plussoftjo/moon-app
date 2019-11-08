import React from 'react';
import {View,Text} from 'react-native';
import {Button,Icon, Content, Textarea, Form} from 'native-base';
import {inject,observer} from 'mobx-react';
@inject('quiz')
@inject('settings')
@inject('auth')
@observer
export default class Question extends React.Component {
    constructor(props) {
        super(props)

        this.state = {ques_num:0,value:''};
    }
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:20,height:'80%',width:'100%'}}>
                <Content padder>
                <Text style={{fontWeight:'700',fontSize:22,color:'white',textAlign:'center',marginTop:15,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Question':'السوال رقم'} {this.props.quiz.question_num + 1}</Text>
                <Text style={{color:'rgba(255,255,255,0.7)',textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                    {locale == 'en'?'Please Answer Question Bellow':'الرجاء الاجابة عن السوال التالي'}
                </Text>
                <View style={{height:2,width:'100%',backgroundColor:'rgba(255,255,255,0.4)',marginTop:10,borderRadius:1}}></View>
                <View style={{paddingTop:10}}>
                    <Text style={{paddingTop:15,textAlign:'left',fontWeight:'600',color:'white',fontSize:16,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                        {locale == 'en' ?this.props.qes[this.state.ques_num].title_en:this.props.qes[this.state.ques_num].title_ar}
                    </Text>
                </View>
                <View style={{width:'100%',padding:10}}>
                        <Textarea rowSpan={3} bordered placeholder="Answer" style={{borderRadius:10,backgroundColor:'white'}} value={this.state.value} onChangeText={(val) => {this.setState({value:val})}} />
                </View>
                <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:5}}>
                    <Button onPress={() => {
                        if(this.props.qes.length - 1 == this.state.ques_num) {
                            this.props.quiz.quiz_state = 3;
                            this.props.quiz.question_awnser.push({question:this.props.qes[this.state.ques_num].title_ar,value:this.state.value});
                            //create the server save here 
                            this.props.quiz._store_values_to_server(this.props.auth.user.id);
                        }else {
                            this.props.quiz.question_awnser.push({question:this.props.qes[this.state.ques_num].title_ar,value:this.state.value});
                            this.setState({value:''});
                            this.setState({ques_num: this.state.ques_num + 1})
                        }
                    }} style={{justifyContent:'center',alignContent:'center',alignItems:'center',width:300}} dark rounded>
                        <Text style={{color:'white',fontWeight:'600',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'Next':'التالي'}</Text>
                    </Button>
                    <View style={{height:5}}></View>
                    <Button style={{justifyContent:'center',alignItems:'center',alignContent:'center',width:300}} danger rounded onPress={() => {
                        this.setState({value:'',ques_num:0})
                        this.props.navigation.navigate('QuizMain')
                    }}>
                        <Text style={{color:'white',fontWeight:'600',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Cancle':'الغاء'}</Text>
                    </Button>
                </View>
                <View style={{height:200}}></View>
                </Content>
            </View>
        )
    }
}