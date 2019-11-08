import {StyleSheet,Dimensions} from 'react-native';
const { width: screenWidth } = Dimensions.get('window')

export const ItemCardStyle = StyleSheet.create({
    box:{
        marginRight:5,
        marginLeft:5,
        position:'relative'
    },
    image:{
        width:screenWidth / 2.5,
        height:screenWidth /2.5 * 1.3,
        borderRadius:8
    },
    title:{
        fontWeight:'800',
        paddingTop:1,
        maxWidth:screenWidth / 2.5,
        textAlign:'center',
        fontSize:12
    },
    price:{
        paddingTop:2,
        color:'#ffb499',
        fontWeight:'600',
        textAlign:'center',
        fontFamily:'BigShouldersDisplayExtraBold'
    }
});