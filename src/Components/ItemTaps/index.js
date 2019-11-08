import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {Text,View} from 'react-native';
import {ItemTapsStyle} from './style';
import {Description,Features,Reviews} from './Parts';
export default class ItemTaps extends Component {
  render() {
    let {locale,colors} = this.props;
    return (
      <View style={{marginTop:30}}>
        <Tabs >
          <Tab heading={locale == 'en'?'Description':'وصف المنتج'} activeTextStyle={ItemTapsStyle.activeTextStyle}  tabStyle={{backgroundColor:'rgba(0,0,0,0.03)'}}>
            <Description locale={locale}/>
          </Tab>
          <Tab heading={locale == 'en'?'Features':'المميزات'} activeTextStyle={ItemTapsStyle.activeTextStyle} tabStyle={{backgroundColor:'rgba(0,0,0,0.03)'}}>
            <Features locale={locale}/>
          </Tab>
          <Tab heading={locale == 'en'?'Reviews':'الاراء'}  activeTextStyle={ItemTapsStyle.activeTextStyle} tabStyle={{backgroundColor:'rgba(0,0,0,0.03)'}}>
          <Reviews locale={locale}/>
          </Tab>
        </Tabs>
      </View>
    );
  }
}