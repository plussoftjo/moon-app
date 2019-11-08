import {observable,computed,action} from 'mobx';
import {Toast} from 'native-base';
import axios from 'axios';
export default class Cart {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable screen = 0; //--> For Cart Screen proccess Number
    @observable items = [

    ];
    @observable netPrice = 0;
    @observable wishlist = [];
    @observable myorder = [];
    @observable form = [{title:'name',title_ar:'الاسم',value:'',error:false},{title:'Address',title_ar:'العنوان',value:'',error:false},{title:'Phone',title_ar:'رقم الهاتف',value:'',error:false},{title:'Email',title_ar:'البريد الالكتروني',value:'',error:false}];
    @observable form_has_error = false;

    /*--actions--*/
    @action _change_screen(type) {
        //type --> is for up or down
        if(type == 'up') {
            if(this.screen == 1) {
                // This is for form 
                // Page 1 Check the form for Delvery Info 
                // Create the loop and check the Form 
                let errors = 0;
                // this.form.forEach(trg => {
                //     if(trg.value == '') {
                //         errors = errors + 1;
                //         this.form_has_error = true;
                //         trg.error = true; 
                //     }
                // });
                // If Check no error complate the task 
                if(errors == 0) {
                    this.screen = this.screen + 1;
                }
            }else {
                this.screen = this.screen + 1;
            }
        }else {
            this.screen > 0 ? this.screen = this.screen -1:this.screen = this.screen
        }
    }

    @action _store(navigation,items,qty) {
        let has = false;
        this.items.forEach(trg => {
            if(trg.id == items.id) {
                has = true;
            }
        });
        if(!has) {
            let item = {price:items.price,netPrice:items.price * qty,id:items.id,title:items.name_en,qty:qty,image:items.image}
            this.items.push(item);
            this.netPrice = items.price * qty + this.netPrice;
        }
        this.screen = 0;
        navigation.navigate('ShopCart')
    }

    @action _change_qty(item,number) {
        let index = this.items.indexOf(item);
        this.items[index].qty = number;
        this.items[index].netPrice = this.items[index].price * number;
        this.netPrice = 0;
        this.items.forEach(trg => {
            this.netPrice = this.netPrice + trg.netPrice;
        });
    }


    @action _remove_from_list(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index,1);
        this.netPrice = 0;
        this.items.forEach(trg => {
            this.netPrice = this.netPrice + trg.netPrice;
        });
    }

    @action _store_wishlist(item) {
        this.wishlist.push(item)
    }

    @action _delete_wishlist(item) {
        let index = this.wishlist.indexOf(item);
        this.wishlist.splice(index,1);
    }
    
    @action _addAllTo_cart(navigation) {
        this.wishlist.forEach(trg => {
            this.items.push({price:trg.price,netPrice:trg.price * 1,id:trg.id,title:trg.title,qty:1,image:trg.image});
            this.netPrice = this.netPrice + trg.price;
        });
        this.wishlist = [];
        navigation.navigate('Cart');
    }

    @action _complate_cart(user_id) {

        axios.post(this.serverUri + 'api/shop/cart/store',{address:this.form,net:this.netPrice,items:this.items,user_id:user_id}).then(response => {
            this.myorder.push(response.data);
        }).catch(err => {
            console.log(err.response)
        });
        this.screen = this.screen + 1;
    }

    @action _select_discount(value) {
        let discount = value / 10;
        this.netPrice = this.netPrice - 10;
        this.netPrice < 0 ? this.netPrice = 0:null;
    }

    /*--Constructor--*/
    constructor() {
        /*-When Fire Methods-*/
       
    }
}