import React, { Component } from 'react';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { colors } from '../../Common/Colors';
import {inject,observer} from 'mobx-react'
@inject('settings')
@observer
export default class ListIconExample extends Component {
  render() {
      const locale = this.props.settings.locale.title;
    return (
      <Container style={{backgroundColor:colors.background_dark}}>
          <Header style={{backgroundColor:colors.background_dark}}>
              <Left>
              <Button transparent onPress={() => {this.props.navigation.goBack()}}>
                  <Icon type={'Feather'} style={{color:colors.textColor}} name={locale == 'en'?'arrow-left':'arrow-right'} />
              </Button>
              </Left>
          </Header>
        <Content>
          <ListItem icon onPress={() => {
                                    this.props.settings._change_language()
                                }}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active type="Entypo" name="language" />
              </Button>
            </Left>
            <Body>
              <Text style={{color:'white'}}>{locale == 'en'? 'Language':'اللغة'}</Text>
            </Body>
            <Right>
              <Text>{this.props.settings.locale.title}</Text>
              <Icon active name={locale == 'en' ? 'arrow-forward':'arrow-round-back'} />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => {this.props.navigation.navigate('AboutUs')}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active type="Feather" name="file-text" />
              </Button>
            </Left>
            <Body>
              <Text style={{color:'white'}}>{locale == 'en' ? 'About Us':'حول التطبيق'}</Text>
            </Body>
            <Right>
              <Icon active name={locale == 'en' ? 'arrow-forward':'arrow-round-back'} />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => {
                                    this.props.auth._logout(this.props.navigation)
                                 }}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active type="Feather" name={'log-out'} />
              </Button>
            </Left>
            <Body>
              <Text style={{color:'white'}}>{locale == 'en'?'Log Out':'تسجيل خروج'}</Text>
            </Body>
            <Right>
              <Icon active  name={locale == 'en' ? 'arrow-forward':'arrow-round-back'} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}