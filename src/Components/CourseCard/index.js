import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

export default class CourseCard extends React.Component {
    render() {
        let {locale,colors} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                this.props.type == 'MyCourses' ?
                this.props.courses._Select_My_Item(this.props.data,this.props.navigation):
                this.props.courses._Select_Item(this.props.data,this.props.navigation)
                }} style={{margin:15,marginTop:5,marginBottom:5,borderColor:'rgba(255,255,255,0.08)',borderWidth:1,borderRadius:10,zIndex:1}}>
                <View>
                    <Image source={{uri:this.props.serverUri + this.props.data.image}} style={{width:'100%',height:150,borderRadius:10}} />
                </View>
                <View style={{padding:10,backgroundColor:'rgba(255,255,255,0.02)'}}>
                    <Text style={{textAlign:'left',color:colors.textColor,fontFamily:'CairoBold'}}>{locale == 'en'?this.props.data.name_en:this.props.data.name_ar}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}