import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
export default class Description extends React.Component{
    render() {
        return (
            <View style={Style.box}> 
                <FlatList
                    data={[
                    ]}
                    renderItem={({item}) => <Text style={Style.item}>{item.key}</Text>}
                    />
            </View>
        )
    }
}

const Style = StyleSheet.create({
    box:{
        padding:30,
        backgroundColor:'rgba(0,0,0,0.03)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});