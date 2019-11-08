import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,KeyboardAvoidingView, TextInput} from 'react-native';
import { Icon ,Content, Button} from 'native-base';
import { Constants } from 'expo';
import { Card } from 'react-native-paper';
export default class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cardNo: '',
          cardProvider: '',
          cardHolder: '',
          expDate: '',
        }
      }
    render() {
        let {navigation,locale,sectiona} = this.props;
        return (
            <View style={{paddingTop:20}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'10%'}}></View>
                    <TouchableOpacity style={[Style.MethodBox,Style.active]}>
                        <Icon type="Feather" name="credit-card" style={[{color:'white'},Style.activeText]} />
                        <Text style={[{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontWeight:'700',color:'white',fontSize:16},Style.activeText]}>Knet</Text>
                    </TouchableOpacity>
                    <View style={{width:'10%'}}></View>
                    <TouchableOpacity style={Style.MethodBox}>
                        <Icon type="Entypo" name="paypal" style={{color:'white'}} />
                        <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:16,color:'white',fontWeight:'700'}}>PayPal</Text>
                    </TouchableOpacity>
                    <View style={{width:'10%'}}></View>
                </View>
                <View style={{padding:20}}>
                    <View style={{backgroundColor:'white',height:'83%',borderRadius:10}}>
                        <View style={Style.formContainer}>
                            <Text style={{fontWeight:'700',fontSize:18,fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold'}}>{locale == 'en'?'Enter Your Payment Details':'ادخل معلومات الشراء'}</Text>
                            <Text style={Style.formLabel}>{locale == 'en'?'Card Provider':'نوع البطاقة'}</Text>
                            <TextInput  
                            style={Style.card}
                            onChangeText={(cardProvider) => this.setState({cardProvider})}
                            value={this.state.cardProvider} 
                            placeholder={'Visa Mastercard Discover'}
                            textContentType={'name'}
                            />

                            <Text style={Style.formLabel}>{locale == 'en'?'Card No':'رقم البطاقة'}</Text>
                            <TextInput  
                            style={Style.card}
                            onChangeText={(cardNo) => this.setState({cardNo})}
                            value={this.state.cardNo} 
                            placeholder={'**** **** **** ****'}
                            keyboardType={'numeric'}
                            secureTextEntry
                            textContentType={'creditCardNumber'}
                            />

                            <Text style={Style.formLabel}>Card Holder{locale == 'en'?'Card Holder':'الاسم على البطاقة'}</Text>
                            <TextInput  
                            style={Style.card}
                            onChangeText={(cardHolder) => this.setState({cardHolder})}
                            value={this.state.cardHolder} 
                            placeholder={'Jamie Smith'}
                            textContentType={'givenName'}
                            />

                            <Text style={Style.formLabel}>Expiration Date{locale == 'en'?'Expiration Date':'تاريخ الانتهاء'}</Text>
                            <TextInput  
                            style={Style.card}
                            onChangeText={(expDate) => this.setState({expDate})}
                            value={this.state.expDate} 
                            placeholder={'12/21'}
                            />
                            {this.props.type == 'SectionA' &&
                            <Button onPress={() => {sectiona._store(navigation)}} style={{marginTop:30}} block dark rounded><Text style={{color:'white',fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:18}}>{locale == 'en'?'Checkout':'اتمام العملية'}</Text></Button>
                            }
                            {this.props.type == 'Courses' &&
                            <Button onPress={() => {this.props.navigation.navigate('DoneCourses')}} style={{marginTop:30}} block dark rounded><Text style={{color:'white',fontFamily:'Roboto',fontSize:16}}>Checkout</Text></Button>
                            }
                            {this.props.type == 'quiz' &&
                            <Button onPress={() => {this.props.quiz._store(this.props.navigation)}} style={{marginTop:30}} block dark rounded><Text style={{color:'white',fontFamily:'Roboto',fontSize:16}}>Checkout</Text></Button>
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const Style = StyleSheet.create({
    MethodBox:{
        width:'35%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderWidth:1,
        borderColor:'white',
        paddingTop:20,
        paddingBottom:20,
        borderRadius:10
    },
    active:{
        backgroundColor:'white'
    },
    activeText:{
        color:'black'
    },
    title: {
        margin: 24,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      formContainer: {
        height:'100%',
        backgroundColor: '#ecf0f1',
        padding: 20,
        borderRadius:5
      },
      formLabel: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#444',
      },
      card: {
        height: 40, 
        paddingLeft: 20,
        paddingBottom: 5,
      },
});