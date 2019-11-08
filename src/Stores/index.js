import Settings from './Settings';
import Main from './Main';
import SectionA from './SectionA'
import Shop from './Shop';
import Cart from './Cart'
import Courses from './Courses'
import Quiz from './Quiz'
import Auth from './Auth'

export default {
    settings:new Settings(),
    main:new Main(),
    sectiona:new SectionA(),
    shop:new Shop(),
    cart:new Cart(),
    courses:new Courses(),
    quiz:new Quiz(),
    auth:new Auth(new SectionA())
}