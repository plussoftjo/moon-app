import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage} from 'react-native';
import { Updates } from 'expo';


export default class Settings {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    @observable locale = {};
    @observable citys = []
    @observable selected_city = 'Amman'
    @observable ship_payment = {};
    /*--Static Value--*/

    /*-Install_action-*/
    @action _install = async() => {
        //install Language 
        try {
            const locale = await AsyncStorage.getItem('locale');
            if(!locale) {
                this.locale = {title:'en',rtl:false}
            }else {
                if(locale == 'en') {
                    this.locale = {title:'en',rtl:false};
                }else {
                    this.locale = {title:'ar',rtl:true}
                }
            }
            this.citys = [{title:'Amman',ship:2},{title:'Al-zarqa',ship:3},{title:'Irbid',ship:4}];
            this.ship_payment = {city:this.citys[0].title,ship:this.citys[0].ship}
        } catch(error) {
            console.log(error)
        } 
        I18nManager.forceRTL(this.locale.rtl);
        I18nManager.allowRTL(this.locale.rtl);
    }

    /*--action--*/
    @action _change_language = async() => {
        if(this.locale.title == 'en') {
            try {
                await AsyncStorage.setItem('locale','ar');
                this.locale = {title:'ar',rtl:true};
                I18nManager.forceRTL(true);
                I18nManager.allowRTL(true);
                Updates.reload();
            } catch (error) {
                console.log(error)
            }
            
        }else {
            try {
                await AsyncStorage.setItem('locale','en');
                this.locale = {title:'en',rtl:false};
                I18nManager.forceRTL(false);
                I18nManager.allowRTL(false);
                Updates.reload();
            } catch (error) {
                console.log(error)
            }
        }
    }

    @action _change_city(value) {
        this.selected_city = value;
        let index = this.citys.map(function(e) { return e.title; }).indexOf(value);
        this.ship_payment = {city:this.citys[index].title,ship:this.citys[index].ship};
    }

   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}