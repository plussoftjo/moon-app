import React from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {Entypo,Feather} from '@expo/vector-icons';
import { Button,Drawer} from 'native-base';
import {MainDrawer} from '../../Components/Drawers';
import {inject,observer} from 'mobx-react';
import { colors } from '../../Common/Colors';
@inject('settings')
@inject('main')
@observer
export default class AppMain extends React.Component {
    constructor(props) {
        super(props);

    };
    componentDidMount() {
        this.closeDrawer();
    }
    closeDrawer = () =>  {
        this.drawer._root.close();
    };
    render() {
        return (
            <Drawer openDrawerOffset={0.30} panCloseMask={0.35} onClose={() => this.closeDrawer()} ref={(ref) => { this.drawer = ref; }} content={<MainDrawer closeDrawer={this.closeDrawer} navigation={this.props.navigation} settings={this.props.settings} />}>
            <ImageBackground source={require('../../Images/main.jpg')} style={{height:'100%',width:'100%'}}>
                <View style={Style.nav}>
                    <Button transparent onPress={() => {this.drawer._root.open()}}>
                        <Feather name="menu" color="white" style={{fontSize:42,color:colors.textColor}} />
                    </Button>
                </View>
                <View style={Style.Sections}>
                    {this.props.main.sections.map((trg,index) => 
                     <TouchableOpacity onPress={() => {this.props.navigation.navigate(trg.at)}} style={Style.SectionIcon} key={index}>
                        <Image source={trg.image} style={{height:Dimensions.get('window').height * 0.16,marginLeft:this.props.settings.locale.title == 'en'?10:0,marginRight:this.props.settings.locale.title == 'en'?0:10}} resizeMode="contain" />
                        <Text style={{fontSize:16,fontWeight:'900',color:colors.textColor,fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.settings.locale.title == 'en' ?trg.title:trg.title_ar}</Text>
                    </TouchableOpacity>   
                    )}
                </View>
                {/* <Button transparent onPress={()=>{this.props.settings._change_language()}}><Text>change lang</Text></Button> */}
            </ImageBackground>
            </Drawer>
        )
    }
}

const Style = StyleSheet.create({
    nav:{
        paddingTop:30,
        paddingRight:15,
        paddingLeft:15
    },
    Sections:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    SectionIcon:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    }
});