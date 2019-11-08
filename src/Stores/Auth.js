import {observable,computed,action} from 'mobx';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
export default class Auth {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable register ={phone:'',password:'',name:''}
    @observable login = {phone:'',name:''};
    @observable error = false;
    @observable login_error = false;
    @observable register_success = false;
    @observable loader = false;
    @observable user = {};

    /*--actions--*/

    /** Register Action */
    @action _register = async(navigation) => {
        this.error = false;
        this.loader = true;
        this.register_success = false;

        // Now Register with axios
        axios.post(this.serverUri + 'api/user/register',this.register).then(async(response) => {
            this.loader = false;
            this.error = false;
            this.register_success = true;
            this.user = response.data.user;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
            await AsyncStorage.setItem('token',response.data.token);
            setTimeout(() => {
                navigation.navigate('AppMain');
            },1000);
        }).catch(err => {
            console.log(err.response)
            this.loader = false;
            this.error = true;
            this.register_success = false;
        });
    }

    /** Login Action */
    @action _login = async(navigation) => {
        this.login_error = false;
        this.loader = true;

        // Now Login the user with axios
        axios.post(this.serverUri + 'api/user/login',this.login).then(async(response) => {
            this.loader = false;
            this.login_error = false;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
            this.user = response.data.user;
            await AsyncStorage.setItem('token',response.data.token);
            navigation.navigate('AppMain');
        }).catch(err => {
            console.log(err)
            this.loader = false;
            this.login_error = true;
        });
    }

    /** Auth Controller */
    @action _auth = async(navigation) => {
        try {
            let token = await AsyncStorage.getItem('token');
            if(token !== null) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                axios.get(this.serverUri + 'api/user/index').then(response => {
                    this.user = response.data;
                    navigation.navigate('AppMain');
                }).catch(err => {
                    navigation.navigate('Login');
                });
            }else {
                navigation.navigate('Login');
            }
        } catch (error) {
            navigation.navigate('Login');
            
        }
    }

    @action _logout = async(navigation) => {
        await AsyncStorage.removeItem('token');
        navigation.navigate('Login');
    }
}