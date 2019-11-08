import React from 'react';
import {View,Text} from 'react-native';
import {Button,Icon} from 'native-base';

export default class StartQuiz extends React.Component {
    render() {
        const locale = this.props.locale;
        return (
            <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:50}}>
                <Text style={{fontWeight:'700',fontSize:22,color:'white',textAlign:'center',marginTop:15}}>Details</Text>
                <Text style={{color:'rgba(255,255,255,0.7)',textAlign:'center',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                    {locale == 'en'?'Please Finish All the task question':'الرجاء انهاء جميع اسئلة الاختبار'}
                </Text>
                <View style={{paddingTop:'10%'}}>
                    <Button onPress={() => {this.props.quiz._start_quiz()}} style={{justifyContent:'center',alignContent:'center',alignItems:'center',width:300}} dark rounded>
                        <Text style={{color:'white',fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale =='en'?'Start Quiz':'ابدا الاختبار'}</Text>
                    </Button>
                </View>
                <View style={{paddingTop:'5%'}}>
                    <Button style={{justifyContent:'center',alignContent:'center',alignItems:'center',width:300}} onPress={() => {this.props.navigation.goBack()}} danger rounded>
                        <Text style={{color:'white',fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'back':'رجوع'}</Text>
                    </Button>
                </View>
            </View>
        )
    }
}