import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage} from 'react-native';
import { Updates } from 'expo';
import axios from 'axios';

export default class SectionA {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable categores = []; // <=== This For categores
    @observable tickets = [];
    @observable selected_catg = {};
    @observable selected_ticket = {};

    /*-Install_action-*/
    @action _install() {
        // Install Secctions 
        
        axios.get(this.serverUri + 'api/psychologicalcounseling/index').then(response => {
            this.categores = response.data;
        }).catch(err => {
            console.log(err.response)
        });

        // install tickets 
        this.tickets = [
        ];
    }

    /*--action--*/
   @action _select_catg(items,navigation) {
       this.selected_catg = items;
       navigation.navigate('CatgShow')
   }
   
   @action _store(navigation) {
        this.tickets.push(this.selected_catg);
        this.selected_catg = {};
        navigation.navigate('Done');
   }


   @action _chat_install(catg_id) {
        
   }

   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}