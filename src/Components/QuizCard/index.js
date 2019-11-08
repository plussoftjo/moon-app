import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import {inject,observer} from 'mobx-react';
@inject('quiz')
@observer
export default class QuizCard extends React.Component {
    render() {
        let {colors,locale,data,type} = this.props;
        return (
            <TouchableOpacity onPress={() => {type == 'myQuiz' ?
             this.props.quiz._select_my_quiz(data,this.props.navigation):
             this.props.quiz._select_quiz(data,this.props.navigation)
             }} style={{margin:15,marginBottom:5,borderRadius:10,borderColor:colors.textColor,borderWidth:1}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'40%'}}>
                        <Image source={{uri:this.props.quiz.serverUri + data.image}} style={{width:'100%',height:125,borderRadius:10}} />
                    </View>
                    <View style={{width:'60%',padding:15}}>
                        <Text style={{fontWeight:'600',fontSize:16,color:colors.textColor,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>
                            {locale == 'en' ? data.name_en : data.name_ar}
                        </Text>
                        <Text style={{color:colors.textColor,paddingTop:5,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',textAlign:'left'}}>
                            {locale == 'en'?data.description_en:data.description_ar}
                        </Text>
                        <View style={{position:'absolute',bottom:0,right:0}}>
                            <Icon type="Feather" name={locale == 'en'?'arrow-right':'arrow-left'} style={{color:colors.textColor}} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}