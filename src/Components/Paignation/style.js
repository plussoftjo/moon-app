import {StyleSheet,Dimensions} from 'react-native';
const { width: screenWidth } = Dimensions.get('window')

export const CategoryShowStyle = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'700',
        margin:10,
    },
    box:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
        
    },
    intinalBox:{
        width:'50%',
        height:screenWidth /2 * 1.4,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }
});