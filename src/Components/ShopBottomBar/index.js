import React from 'react';
import {Footer,Badge,Body,Button,Icon,Title,Text,FooterTab} from 'native-base';
export default class ShopBottomBar extends React.Component {
    render() {
        return (
            <Footer>
                    <FooterTab>
                        <Button onPress={() => {this.props.navigation.navigate('ShopMain')}}>
                            <Icon type="AntDesign" name="home" style={{fontSize:28}} />
                        </Button>
                        <Button onPress={() => {this.props.navigation.navigate('ShopCatg')}}>
                            <Icon type="AntDesign" name="bars" style={{fontSize:28}}/>
                        </Button>
                        <Button onPress={() => {this.props.navigation.navigate('ShopSearch')}}>
                            <Icon type="AntDesign" name="search1" style={{fontSize:28}}/>
                        </Button>
                        <Button onPress={() => {this.props.navigation.navigate('ShopCart')}}>
                            <Icon type="AntDesign" name="shoppingcart" style={{fontSize:28}}/>
                        </Button>
                        <Button onPress={() => {this.props.navigation.navigate('ShopWishlist')}}>
                            <Icon name="hearto" type="AntDesign" style={{fontSize:28}}/>
                        </Button>
                    </FooterTab>
                </Footer>
        )
    }
}