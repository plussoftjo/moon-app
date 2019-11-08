import React from 'react';
import {Container,Header,Text,Icon,Button} from 'native-base';
import {Image,View} from 'react-native';
import {StartQuiz,Questions,QuestionsDone} from './Parts'
import {inject,observer} from 'mobx-react';
@inject('quiz')
@inject('settings')
@observer
export default class QuizShow extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:'#232b2b'}}>
                <View style={{position:'relative'}}>
                    <Image source={{uri:this.props.quiz.serverUri + this.props.quiz.selected_my_quiz.image}} style={{width:'100%',height:250}} resizeMode="contain" />
                    <View style={{position:'absolute',bottom:0,left:0,width:'100%',paddingTop:7,paddingBottom:7,backgroundColor:'rgba(0,0,0,0.02)'}}>
                        <Text style={{fontWeight:'700',textAlign:'center',fontSize:16}}>
                            {locale == 'en' ? this.props.quiz.selected_my_quiz.name_en:this.props.quiz.selected_my_quiz.name_ar}
                        </Text>
                    </View>
                </View>
                {this.props.quiz.quiz_state == 1 &&
                <StartQuiz navigation={this.props.navigation} locale={locale} quiz={this.props.quiz} />
                }
                {this.props.quiz.quiz_state == 2 &&
                <Questions locale={locale} quiz={this.props.quiz} qes={this.props.quiz.selected_my_quiz.quiz_question} />
                }
                {this.props.quiz.quiz_state == 3 &&
                <QuestionsDone locale={locale} quiz={this.props.quiz} navigation={this.props.navigation} />
                }
            </Container>
        )
    }
}