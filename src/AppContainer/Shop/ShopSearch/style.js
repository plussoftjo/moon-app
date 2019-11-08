import {StyleSheet,Dimensions} from 'react-native';
const { width: screenWidth } = Dimensions.get('window')
export const SearchStyle = StyleSheet.create({
    box:{
        paddingTop:50,
        
    },
    formStyle:{
        backgroundColor:'white',
        height:45
    },
    ResultLayout:{
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