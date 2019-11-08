import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Button} from 'native-base';
import ItemCard from '../ItemCard';
import {CategoryShowStyle} from './style'
/*--Mobx--*/
import {inject,observer} from 'mobx-react';
@inject('shop')
@inject('settings')
@observer
export default class Paignation extends React.Component {
    render() {
        const locale = this.props.settings.locale.title;
        const fetchProudct = this.props.data.map((fetch,index) => 
                <View style={CategoryShowStyle.intinalBox} key={index}>
                    <ItemCard data={fetch} navigation={this.props.navigation}/>
                </View>
            );
        return (
            <View style={{paddingTop:30}}>
                <Text style={{fontSize:20,fontWeight:'700',paddingLeft:8,color:'white',textAlign:'left',paddingRight:8}}>{locale == 'en' ? 'Proudects' :'المنتجات'}</Text>
                <ScrollView style={{marginTop:10}}>
                    <View style={CategoryShowStyle.box}>
                        {fetchProudct}
                    </View>
                </ScrollView>
            </View>
        )
    }
}