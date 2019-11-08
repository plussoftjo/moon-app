import {observable,computed,action} from 'mobx';
import {I18nManager,AsyncStorage,ScrollView} from 'react-native';
import { Updates } from 'expo';
import _ from 'lodash';
import Fuse from 'fuse.js'
import axios from 'axios';

export default class Shop {
    /*--Global Value--*/
    @observable serverUri = 'http://35.176.214.48/';
    /*--Static Value--*/
    @observable categores = []; // <=== This For categores
    @observable top_items =[]; // <=== this for top item for caresoul
    @observable f_items =[]; // <=== this for Features items
    @observable t_items =[]; // <=== this for Features items
    @observable items =[]; // <=== this for Features items

    /**Search Result */
    @observable search_result = [];
    @observable search_type = 1;
    @observable searched = false;

    /** items */
    @observable selected_item = {};
    @observable selected_catg_items =[];

    /*-Install_action-*/
    @action _install() {
        // Install Secctions 
        this.categores = [{title:'Book',title_ar:'كتب',image:require('../Images/shop/catg/books.jpg')},{title:'T-shirt',title_ar:'تيشيرت',image:require('../Images/shop/catg/tshirt.jpg')}];
        this.items = [
        //     {id:1,title:'LIKES BY ANDY SPADE',title_ar:'الأعجاب - اندي سباد',price:20,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/Likes_-_1_469x.jpg',catg:0},
        //     {id:2,title:'SKIRT CHRONICLES, ISSUE 5',title_ar:'سجلات المتنحية ، العدد 5',price:18,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_6465_1200x.jpg',catg:0},
        //     {id:3,title:'SYNTAX BY RALPH GIBSON',title_ar:'SYNTAX من رالف غيبسون',price:28,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_5585_1200x.jpg',catg:0},
        //     {id:4,title:'NOSE TO TAIL EATING ',title_ar:'الأنف إلى الذيل الأكل',price:80,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_5425_1200x.jpg?v=1566416081',catg:0},
        //     {id:5,title:'AUTHOR SERIES T-SHIRT',title_ar:'سلسلة المؤلفين تي شيرت',price:45,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_4296_1_1200x.png?v=1564693446',catg:1},
        //     {id:6,title:'BOOK JACKET',title_ar:'سترة كتاب',price:12,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_4098_1200x.jpg?v=1564122854',catg:1},
        //     {id:7,title:'CEMETERY GATES',title_ar:'تيشيرت ابيض ',price:45,image:'https://cdn.shopify.com/s/files/1/0880/2454/products/IMG_1218-2_1024x.jpg?v=1560921054',catg:1}
        ];
        


        axios.get(this.serverUri + 'api/shop/index').then(response => {
            this.categores = response.data.shop_category;
            this.items = response.data.items;
            this.top_items = this.items.slice(2,6);
            this.f_items = this.items;
            this.t_items = this.items.slice(2,6)
        }).catch(err => {
            console.log(err.response)
        });
        

    }

    /*--action--*/
    @action _search(value) {
        let self = this;
        let search = _.debounce(() => {
            var options = {
                keys:['name_en','name_ar']
            }
            var fuse = new Fuse(self.items,options);
            let result = fuse.search(value);
            self.search_result = result;
        },500);
        search();
        this.searched = true;
        this.search_type = 1;
    }

    @action _select_item(navigation,item) {
        this.selected_item = item;
        navigation.navigate('ShopItem');
    }

    @action _select_catg(navigation,catg_id) {
        this.items.forEach(trg => {
            if(trg.shop_category_id == catg_id) {
                this.selected_catg_items.push(trg);
            }
        });
        navigation.navigate('ShopCatgShow');
    }




   constructor() {
    /*--When-Fire--*/

    /* Install */
    this._install();
    }
}