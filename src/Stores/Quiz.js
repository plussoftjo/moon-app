import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage} from 'react-native';
import { Updates } from 'expo';
import axios from 'axios'

export default class Quiz {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable quizes = []; // <=== This For Sections
    @observable selected_quiz ={};
    @observable myQuizes = [];
    @observable selected_my_quiz = {};
    @observable quiz_state = 1; // <=== State of quiz (1=> not Complate render Start quiz, 2=> StartQuiz Fetch first quiestion,3=> Questions Done)
    @observable question_num = 0;
    @observable question_awnser = [];

    /*-Install_action-*/
    @action _install() {
        axios.get(this.serverUri + 'api/quiz/index').then(response => {
            this.quizes = response.data;
        }).catch(err => {
            console.log(err.response)
        });

    }

    /*--action--*/
   @action _select_quiz(item,navigation) {
       this.selected_quiz = item;
       navigation.navigate('BuyQuiz')
   }

   @action _select_my_quiz(item,navigation) {
    this.selected_my_quiz = item;
    navigation.navigate('QuizShow')
    }

    @action _start_quiz() {
        this.quiz_state = 2;
    }
    
    @action _next_question() {
        let length = this.selected_my_quiz.questions.length -1;
        if(this.question_num == length) {
            this.quiz_state = 3;
        }else {
            this.question_num = this.question_num + 1;
        }
    }

    @action _end_quiz(navigation) {
        this.selected_my_quiz = {};
        this.question_num =0;
        this.quiz_state = 1;
        navigation.navigate('MyQuizes');
    }

    @action _end_quiz_home(navigation) {
        this.selected_my_quiz = {};
        this.question_num =0;
        this.quiz_state = 1;
        navigation.navigate('QuizMain');
    }

    @action _store(navigation) {
        this.myQuizes.push(this.selected_quiz);
        navigation.navigate('DoneQuiz')
    }


    /** Install Quiz */
    @action _store_values_to_server(user_id) {
        axios.post(this.serverUri + 'api/quiz/store_awnser',{quiz_id:this.selected_my_quiz.id,awnser:this.question_awnser,user_id:user_id}).then(response => {
        }).catch(err => {
            console.log(err.response)
        });
    }

   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}