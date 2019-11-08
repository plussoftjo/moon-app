import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ItemCard from '../ItemCard';
export default class DefaultLayout extends React.Component {
    render() {
        const {data,navigation} = this.props;
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map(trg => 
                    <ItemCard data={data} navigation={navigation}/>
                )}
            </ScrollView>
        )
    }
}