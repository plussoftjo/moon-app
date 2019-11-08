import React from 'react';
import {View,Text} from 'react-native';
import { GiftedChat,Send,IMessage  } from 'react-native-gifted-chat'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import {colors,staticColors} from '../../../Common/Colors'
import {inject,observer} from 'mobx-react';
import io from 'socket.io-client';
import axios from 'axios';
const socket = io('http://192.168.1.6:3000');
@inject('settings')
@inject('sectiona')
@inject('auth')
@observer
export default class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.renderSend = this.renderSend.bind(this)
  }
    state = {
        messages: [],
    }
    componentWillMount() {
        let self = this;
        socket.emit('subscripe',self.props.auth.user.id);
        socket.on('admin-sent',function(data) {
          let messages = [];
          messages = [{
            _id:Math.floor(100000 + Math.random() * 900000),
            text:data.msg,
            user:{
              _id:2,
              name:'Dr Nadia al-khaldy',
              avatar:'https://placeimg.com/140/140/any'
            }
          }];
          send(messages);
          function send(messages = []) {
            self.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, messages),
            }))
          }
        });
        this.setState({
          messages: [
            {
              _id: 1,
              text: this.props.settings.locale.title == 'en'?'Welcome, Please Ask any thing and the doctor well Awnser you soon':'مرحبا بك , قم بارسال الموضوع الذي تريد الاستفسار عنه وسوف تقوم الدكتورة بالرد عليك قريبا',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Dr Nadia al-khaldy',
                avatar: 'https://placeimg.com/140/140/any',
              },
              image: 'http://blogs.discovermagazine.com/crux/files/2019/08/Full-Moon-Lunacy-1024x853.jpg',

            },
          ],
        });

        axios.post(this.props.settings.serverUri + 'api/message/user/get',{sectiona_ticket_id:this.props.sectiona.selected_ticket.id}).then(response => {
          response.data.forEach((trg,index) => {
            let data = trg.created_at.split(" ");
            let user = {};
            if(trg.sender == 2) {
              user = {
                _id:2,
                name:'Dr Nadia al-khaldy',
                avatar:'https://placeimg.com/140/140/any'
              };
            }else {
              user = {
                _id:1,
                name:this.props.auth.user.name,
                avatar:require('../../../Images/avatar_female.png')
              };
            }
            let messages = {
              _id:Math.floor(100000 + Math.random() * 900000),
              text:trg.message,
              createdAt:new Date(),
              user:user

            };
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, messages),
            }))
          });
        }).catch(err => {
          console.log(err)
        });
      }

      renderSend(props) {
        return (
            <Send
                {...props}
            >
              <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',alignContent:'center',paddingRight:2,paddingLeft:2,paddingBottom:8}}>
                <Text style={{fontFamily:this.props.settings.locale.title == 'en'?'BigShouldersDisplayExtraBold':'CairoBold',fontSize:20,color:staticColors.hex.blue}}>{this.props.settings.locale.title == 'en'?'Send':'أرسال'}</Text>
                <Icon type="Feather" name={this.props.settings.locale.title == 'en'?'chevron-right':'chevron-left'} style={{color:staticColors.hex.blue,fontSize:28}} />
              </View>
            </Send>
        );
      }

      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))

        socket.emit('chat message',{msg:messages[0].text,room:this.props.auth.user.id,type:1});
        axios.post(this.props.settings.serverUri + 'api/message/user/send',{message:messages[0].text,sectiona_ticket_id:this.props.sectiona.selected_ticket.id}).then(response => {

        }).catch(err => {
          console.log(err.response)
        });
      }

      
      
    render() {
      let locale = this.props.settings.locale.title;
        return (
            <Container style={{backgroundColor:colors.background_dark}}>
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left>
                        <Button transparent onPress={() => {this.props.navigation.goBack()}}><Icon type="Feather" name={locale == 'en'?'arrow-left':'arrow-right'} style={{color:colors.textColor}} /></Button>
                    </Left>
                    <Body/>
                    <Right>
                      <Button transparent ><Icon type="Feather" name="phone" style={{color:staticColors.hex.blue}} /></Button>
                    </Right>
                </Header>
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: 1,
                name:'Hajer Hajer',
                avatar:require('../../../Images/avatar_female.png')
                }}
                placeholder={locale == 'en'?'Type a message...':'قم بكتابة رسالة'}
                showUserAvatar={true}
                renderSend={this.renderSend}
                alwaysShowSend={true}
            />
            </Container>
            
        )
    }
}