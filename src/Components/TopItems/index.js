import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ItemCard from '../ItemCard';
export default class DefaultLayout extends React.Component {
    render() {
        const {data,navigation,title,locale,colors} = this.props;
        return (
            <View>
                <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',paddingTop:30,paddingLeft:15,paddingBottom:5,color:colors.textColor,fontSize:18,textAlign:'left'}}>{title}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {data.map((trg,index) => 
                        <ItemCard key={index} data={trg} navigation={navigation} locale={locale} colors={colors}/>
                    )}
                </ScrollView>
            </View>
            
        )
    }
}