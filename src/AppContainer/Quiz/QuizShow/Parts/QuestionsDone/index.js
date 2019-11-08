import React from 'react';
import {View,Text} from 'react-native';
import { Button } from 'native-base';
export default class QuestionsDone extends React.Component {
    render() {
        const locale = this.props.locale;
        return (
            <View style={{marginTop:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'700',fontSize:22,color:'white',textAlign:'center',marginTop:15,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>Questions Done</Text>
                <Text style={{color:'rgba(255,255,255,0.7)',textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                    {locale == 'en'?'Thank You the Quiz is done now well take the quiz manualy and awnser to you':'شكرا لك لاكمال الاختبار سوف يتم مراجعة الاختبار يدويا وارسال الرد اليك'}
                </Text>
                <View style={{marginTop:30}}>
                    <Button onPress={() => {this.props.quiz._end_quiz(this.props.navigation)}} style={{justifyContent:'center',alignItems:'center',alignContent:'center',width:300}} dark rounded>
                        <Text style={{fontWeight:'700',fontSize:16,color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'My Quiz':'اختباراتي'}</Text>
                    </Button>
                    <View style={{height:15}}></View>
                    <Button onPress={() => {this.props.quiz._end_quiz_home(this.props.navigation)}} style={{justifyContent:'center',alignContent:'center',alignContent:'center',width:300}} danger rounded>
                        <Text style={{fontWeight:'700',fontSize:16,color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Home':'الرئيسية'}</Text>
                    </Button>
                </View>
            </View>
        )
    }
}