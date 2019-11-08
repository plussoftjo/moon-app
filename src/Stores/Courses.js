import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage} from 'react-native';
import { Updates } from 'expo';
import axios from 'axios';

export default class Courses {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable Courses = []; // <=== This For Sections
    @observable selected_course = {};
    @observable selected_my_course = {};
    @observable myCourse = [
    ];
    @observable epsoides = [
        
    ];
    @observable epsoide = {};
    @observable epsoide_index = 0;
    @observable show_epsoide = false;


    /*-Install_action-*/
    @action _install() {
        // Install Secctions 

        axios.get(this.serverUri + 'api/course/index').then(response => {
            this.Courses = response.data;
        }).catch(err => {
            console.log(err)
        });
        // this.Courses = [
        // {title:'كيف ترتب اثاثك من خلال طابع المكان',image:'https://cdn3.wpbeginner.com/wp-content/uploads/2019/07/createonlinecoursewp.png'},
        // {title:'المشاكل السرية وكيف تجاوزها',image:'https://cdn3.wpbeginner.com/wp-content/uploads/2019/07/createonlinecoursewp.png'},
        // {title:'30 يوم تدريب جسدي وتدريب مالي',image:'https://cdn3.wpbeginner.com/wp-content/uploads/2019/07/createonlinecoursewp.png'},
        // ]
    }

    /*--action--*/
   @action _Select_Item(course,navigation) {
       this.selected_course = course;
       navigation.navigate('Course');
   }

   @action _Select_My_Item(course,navigation) {
        this.selected_my_course = course;
    navigation.navigate('CourseShow');
}


    @action _select_epsoide(epsoide,navigation) {
        this.show_epsoide = false;
        this.epsoide = epsoide;
        this.epsoide_index = this.selected_my_course.course_epsoide.indexOf(epsoide);
        setTimeout(() => {
            this.show_epsoide = true;

        },100);
        navigation.navigate('ShowEpsoide');
    }

   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}