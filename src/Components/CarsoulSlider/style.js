import {StyleSheet,Dimensions,Platform} from 'react-native';
const { width: screenWidth } = Dimensions.get('window')

export const CarouslSnapStyle = StyleSheet.create({
    item: {
      width: screenWidth - 60,
      height: screenWidth - 60,
    },
    imageContainer: {
      height:screenWidth - 60,
      width:screenWidth - 60,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'contain',
      backgroundColor:'rgba(0,0,0,0.02)',
    },
    title:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'600',
      color:'white',
      fontFamily:'Roboto'
    },
    titleCover:{
      position:'absolute',
      bottom:0,
      left:0,
      width:'100%',
      backgroundColor:'rgba(0,0,0,0.5)',
      padding:10,
      borderRadius:8
    }
  })