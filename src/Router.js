/*--Static-Librare--*/
import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import ar from './Localization/ar';
import en from './Localization/en';
i18n.fallbacks = true;
i18n.translations = { ar, en };

/*--Routes--*/
import {Routes} from './Routes';
class Router extends React.Component {
    render() {
        return (
            <AppNavigator type="new type" navigation={this.props.navigation} />
        )
    }
}

const AppNavigator = createSwitchNavigator(Routes);
export default createAppContainer(AppNavigator);