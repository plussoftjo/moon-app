import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage} from 'react-native';
import { Updates } from 'expo';


export default class Main {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable sections = []; // <=== This For Sections

    /*-Install_action-*/
    @action _install() {
        // Install Secctions 
        this.sections = [{title:'Psychological counseling',title_ar:'استشارات نفسية',at:'SectionA',image:require('../Images/Sections/pr.png')},{title:'Shop',title_ar:'المتجر',at:'Shop',image:require('../Images/Sections/shop.png')},{title:'Courses',title_ar:'الدورات',at:'Courses',image:require('../Images/Sections/courses.png')},{title:'Psychological tests',title_ar:'اختبارات نفسية',at:'Quiz',image:require('../Images/Sections/quiz.png')},{title:'Sport',title_ar:'الرياضة',at:'Sport',image:require('../Images/Sections/sport.png')},{title:'Settings',title_ar:'الاعدادات',at:'Settings',image:require('../Images/Sections/settings.png')}];
    }

    /*--action--*/
   

   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}