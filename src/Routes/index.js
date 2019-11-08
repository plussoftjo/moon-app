import {createStackNavigator,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation'
import { fromLeft,zoomIn,zoomOut,fadeIn,fadeOut,flipX,flipY,fromBottom } from 'react-navigation-transitions';
/** Screens */
import * as AppContainer from '../AppContainer';
import * as Auth from '../AppContainer/Auth';
import * as SectionA from '../AppContainer/SectionA';
import * as Shop from '../AppContainer/Shop'
import * as Courses from '../AppContainer/Courses'
import * as Quiz from '../AppContainer/Quiz'
import * as Sport from '../AppContainer/Sport'
import Settings from '../AppContainer/Settings'
import AboutUs from '../AppContainer/AboutUs'
/*--Auth-Screen--*/
const AuthStack = createSwitchNavigator({
    Login:{
        screen:Auth.Login
    },
    Register:{
        screen:Auth.Register
    }
});

/**-- Section A -- */
const SectionAStack = createStackNavigator({
    SectionAMain:{screen:SectionA.SectionAMain},
    CatgShow:{screen:SectionA.CatgShow},
    OpenTicket:{screen:SectionA.OpenTicket},
    BuyTicket:{screen:SectionA.BuyTicket},
    Done:{screen:SectionA.Done},
    MyTickets:{
        screen:SectionA.MyTickets,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled:false,
        }),
    },
    Ticket:{screen:SectionA.Ticket}
},{headerMode:'none',transitionConfig: () => ({
    transitionSpec:{
        duration:150
    }
})});


const ShopMainStack = createStackNavigator({
    ShopMain:Shop.ShopMain,
    ShopItem:Shop.ShopItem
},{headerMode:'none',transitionConfig: () => ({
    transitionSpec:{
        duration:150
    }
})});
const ShopStack = createStackNavigator({
    ShopMainScreen:{
        screen:ShopMainStack,
    },
    ShopCatg:{
        screen:Shop.ShopCatg
    },
    ShopSearch:{
        screen:Shop.ShopSearch
    },
    ShopCart:{
        screen:Shop.ShopCart
    },
    ShopWishlist:{
        screen:Shop.ShopWishlist
    },
    ShopCatgShow:{
        screen:Shop.ShopCatgShow
    },
    ShopMyOrder:{
        screen:Shop.ShopMyOrder
    }
},{headerMode:'none',transitionConfig: () => fadeIn()});


/**Coureses Stack */
const CoursesStack = createStackNavigator({
    CoursesMain:{
        screen:Courses.CoursesMain
    },
    Course:{
        screen:Courses.Course
    },
    BuyCourse:{
        screen:Courses.BuyCourse
    },
    DoneCourses:{
        screen:Courses.DoneCourses
    },
    MyCourses:{
        screen:Courses.MyCourses
    },
    CourseShow:{
        screen:Courses.CourseShow
    },
    ShowEpsoide:{
        screen:Courses.ShowEpsoide
    }
},{headerMode:'none',transitionConfig: () => ({
    transitionSpec:{
        duration:150
    }
})});

/** Quiz Screens */

const QuizStack = createStackNavigator({
    QuizMain:{
        screen:Quiz.QuizMain,
    },
    BuyQuiz:{
        screen:Quiz.BuyQuiz,
    },
    QuizPayment:{
        screen:Quiz.QuizPayment,
    },
    DoneQuiz:{
        screen:Quiz.DoneQuiz,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled:false,
        }),
    },
    MyQuizes:{
        screen:Quiz.MyQuizes,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled:false
        }),

    },
    QuizShow:{
        screen:Quiz.QuizShow,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled:false
        }),

    },
    QuizAwnser:{
        screen:Quiz.QuizAwnser,
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled:false
        }),

    },
},{headerMode:'none',gesturesEnabled:false});


/** Sport Stack */
const SportStack = createStackNavigator({
    SportMain:{
        screen:Sport.SportMain
    }
},{headerMode:'none'});

/** -- App Main */
const AppMainStack = createStackNavigator({
    AppMainScreen:{
        screen:AppContainer.AppMain
    },
    Shop:{
        screen:ShopStack
    },
    SectionA:{
        screen:SectionAStack
    },
    Courses:{
        screen:CoursesStack
    },
    Quiz:{
        screen:QuizStack
    },
    Sport:{
        screen:SportStack
    },
    Settings:{
        screen:Settings
    },
    AboutUs:{
        screen:AboutUs
    }
},{headerMode:'none',transitionConfig: () => zoomIn()});


/*--Static-Routes--*/
export const Routes = {
    AppLoading:{
        screen:AppContainer.AppLoading
    },
    AppMain:{
        screen:AppMainStack
    },
    Auth:{
        screen:AuthStack
    },
    
};