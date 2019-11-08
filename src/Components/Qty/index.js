import React from 'react';
import NumericInput from 'react-native-numeric-input'
import {Dimensions} from 'react-native';

import {inject,observer} from 'mobx-react';
@inject('cart')
@observer
export default class Qty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number:1}
    }
    render() {
        const { width: screenWidth } = Dimensions.get('window')
        return (
            <NumericInput 
            value={this.props.item.qty}
            minValue={1}
            maxValue={10}
            onChange={(number) => {this.props.cart._change_qty(this.props.item,number)}}
            rounded 
            textColor='black' 
            iconStyle={{ color: 'black' }} 
            rightButtonBackgroundColor='white' 
            leftButtonBackgroundColor='white'
            totalWidth={screenWidth / 2.5} 
            totalHeight={40}
            />
        )
    }
}