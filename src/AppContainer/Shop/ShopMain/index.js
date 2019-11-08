import React from 'react';
import {View} from 'react-native';
import { Header, Left, Right, Body, Content,Container, Icon,Footer, FooterTab,Text,Button, Drawer } from 'native-base';
import {HlListCatg,CarsoulSlider,TopItems,ShopBottomBar,Paignation} from '../../../Components';
import ShopDrawer from '../../../Components/Drawers/ShopDrawer';
import {inject,observer} from 'mobx-react';
import { colors } from '../../../Common/Colors';
@inject('shop')
@inject('settings')
@observer
export default class ShopMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {today:''};
    }
    componentDidMount() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        
        today = monthNames[today.getMonth()] + ' ' + dd;

        this.setState({today:today})
        this.closeDrawer();

    }
    closeDrawer = () =>  {
        this.drawer._root.close();
    };
    render() {
        let locale = this.props.settings.locale.title;
        return (
            <Drawer openDrawerOffset={0.30} panCloseMask={0.35} onClose={() => this.closeDrawer()} ref={(ref) => { this.drawer = ref; }} content={<ShopDrawer closeDrawer={this.closeDrawer} navigation={this.props.navigation} settings={this.props.settings}/>}>
                <Container  style={{backgroundColor:colors.background_dark}} >
                <Header style={{backgroundColor:colors.background_dark}}>
                    <Left><Icon type="Feather" onPress={() => {this.drawer._root.open()}} name="menu" style={{color:colors.textColor}} /></Left>
                    <Body></Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Text style={{fontFamily:locale == 'en'?'BigShouldersDisplayExtraBold':'BigShouldersDisplayExtraBold',fontSize:22,color:colors.textColor,textAlign:'center'}}>
                        Moon Shop
                    </Text>
                    <Text style={{color:'white',fontFamily:'BigShouldersDisplayExtraBold',padding:20,textAlign:'left'}}>
                        {this.state.today}-2019
                    </Text>

                    <HlListCatg serverUri={this.props.shop.serverUri} items={this.props.shop.categores} navigation={this.props.navigation} locale={locale} colors={colors}/>
                    <CarsoulSlider data={this.props.shop.top_items} navigation={this.props.navigation} locale={locale} colors={colors} />
                    <TopItems data={this.props.shop.f_items} navigation={this.props.navigation} locale={locale} colors={colors} title={locale=='en'?'Feature List':'احدث المواد'} />
                    <TopItems data={this.props.shop.t_items} navigation={this.props.navigation} locale={locale} colors={colors} title={locale == 'en'?'Top List':'الاكثر مبيعا'} />


                    {/* main pagination */}
                    <Paignation data={this.props.shop.items} navigation={this.props.navigation} />

                </Content>
                <ShopBottomBar navigation={this.props.navigation}/>
                </Container>
            </Drawer>
        )
    }
}