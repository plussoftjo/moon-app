import React from 'react';
import {Container,Text,Header,Left,Body,Right,Button, Icon, Content} from 'native-base';
import {Image,View,StyleSheet} from 'react-native';
import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('courses')
@inject('settings')
@observer
export default class Course extends React.Component {
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                            <Icon type="Feather" style={{color:colors.textColor}} name={locale == 'en'?'arrow-left':'arrow-right'} />
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <View style={{height:'80%',marginLeft:10,marginRight:10,marginTop:10,paddingBottom:20,borderRadius:10,borderColor:'rgba(75,0,130,0.2)',borderWidth:1,backgroundColor:'rgba(255,255,255,0.9)'}}>
                    <Content>
                        <Image source={{uri:this.props.courses.serverUri + this.props.courses.selected_course.image}} style={{width:'100%',height:225,borderRadius:10}}/>
                        <Text style={{fontWeight:'700',fontSize:22,textAlign:'center',paddingTop:20,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>
                            {locale == 'en'?this.props.courses.selected_course.name_en:this.props.courses.selected_course.name_ar}
                        </Text>
                        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <Button small rounded style={{width:110,justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:8}} dark>
                                <Text style={{fontWeight:'700',fontSize:14,color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{this.props.courses.selected_course.price}KWD</Text>
                            </Button>
                        </View>
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <View style={styles.IconBox}>
                                <Icon type="Feather" name="users" style={styles.Icon} />
                                <Text style={styles.Result}>32</Text>
                                <Text style={styles.Section}>{locale == 'en'?'Student':'مشترك'}</Text>
                            </View>
                            <View style={styles.IconBox}>
                                <Icon type="Feather" name="book" style={styles.Icon} />
                                <Text style={styles.Result}>30</Text>
                                <Text style={styles.Section}>{locale == 'en'?'Day':'يوم'}</Text>
                            </View>
                            <View style={styles.IconBox}>
                                <Icon type="Feather" name="shopping-cart" style={styles.Icon} />
                                <Text style={styles.Result}>5.0</Text>
                                <Text style={styles.Section}>{locale =='en'?'Rate':'تقيم'}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{padding:15,fontSize:16,fontWeight:'700',paddingBottom:5,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Description':'الوصف'}</Text>
                            <Text style={{color:'rgba(0,0,0,0.2)',padding:15,paddingTop:0}}>
                            {locale == 'en'?this.props.courses.selected_course.description_en:this.props.courses.selected_course.description_ar}
                            </Text>
                        </View>
                    </Content>
                </View>
                <Button onPress={() => {this.props.navigation.navigate('BuyCourse')}} dark block style={{margin:10,marginTop:5,marginBottom:5}}><Text style={{color:'white',fontWeight:'700',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Subscripe the Course':'اشتراك في الدورة'}</Text></Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    IconBox:{
        width:'33.33%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    Icon:{
        color:'rgba(0,0,0,0.3)',
        fontSize:40,
        justifyContent:'center',
        alignSelf:'center',
        alignContent:'center',
        paddingRight:10
    },
    Result:{
        fontWeight:'700',
        fontSize:18,
        textAlign:'center'
    },
    Section:{
        fontSize:18,color:'rgba(0,0,0,0.3)',
        textAlign:'center'
    }
});