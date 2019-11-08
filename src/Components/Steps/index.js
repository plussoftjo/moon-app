import React from 'react';
import {View,Text} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
export default class Steps extends React.Component{
    render() {
            const customStyles = {
            stepIndicatorSize: 25,
            currentStepIndicatorSize:30,
            separatorStrokeWidth: 2,
            currentStepStrokeWidth: 3,
            stepStrokeCurrentColor: this.props.colors.textColor,
            stepStrokeWidth: 3,
            stepStrokeFinishedColor: this.props.colors.textColor,
            stepStrokeUnFinishedColor: '#aaaaaa',
            separatorFinishedColor: this.props.colors.textColor,
            separatorUnFinishedColor: '#aaaaaa',
            stepIndicatorFinishedColor: this.props.colors.textColor,
            stepIndicatorUnFinishedColor: '#ffffff',
            stepIndicatorCurrentColor: '#ffffff',
            stepIndicatorLabelFontSize: 13,
            currentStepIndicatorLabelFontSize: 13,
            stepIndicatorLabelCurrentColor: this.props.colors.textColor,
            stepIndicatorLabelFinishedColor: '#ffffff',
            stepIndicatorLabelUnFinishedColor: '#aaaaaa',
            labelColor: '#999999',
            labelSize: 13,
            currentStepLabelColor: this.props.colors.textColor
            }
            const {labels,currentPage} = this.props;
        return (
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPage}
                labels={labels}
                stepCount={4}
            />
        )
    }
}