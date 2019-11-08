import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Root from './src/Root';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      CairoBold:require('./assets/fonts/Cairo-Bold.ttf'),
      Mansalva:require('./assets/fonts/Mansalva-Regular.ttf'),
      CairoRegular:require('./assets/fonts/Cairo-Regular.ttf'),
      BigShouldersDisplay:require('./assets/fonts/BigShouldersDisplay-Bold.ttf'),
      BigShouldersDisplayExtraBold:require('./assets/fonts/BigShouldersDisplay-ExtraBold.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root/>
    );
  }
}
