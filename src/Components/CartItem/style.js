import {StyleSheet,Dimensions} from 'react-native';
const { width: screenWidth } = Dimensions.get('window')
export const CartItemStyle = StyleSheet.create({
    box:{
        borderTopWidth:2,
        borderTopColor:"rgba(255,255,255,0.2)",
        height:screenWidth / 2.3,
    },
    image:{
        height:screenWidth / 2.5,
        width:screenWidth / 3,
        marginTop:10,
        borderRadius:5
    },
    title:{
        marginTop:25,
        fontWeight:'500',

    },
    price:{
        fontWeight:'700',
        fontSize:20
    },
    detailsBox:{
        height:screenWidth / 2.5,
        paddingTop:15,
    },
    QtyBox:{
        paddingTop:20,
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
    },
    deleteIcon:{
        position:'absolute',
        top:0,
        right:0
    }
});