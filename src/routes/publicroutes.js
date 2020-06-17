import signup from '../pages/signup';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Complete from'../pages/completed';
import uncomplete from'../pages/uncompleted';
import Forgetpass from'../pages/forgetpass';


const publicRoutes = [
    {
        path:"/signup",
        component:signup,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },
    {
        path:"/profile",
        component:Profile,
        exact:true
    },
    {
        path:"/complete",
        component:Complete,
        exact:true
    },
    {
        path:"/uncomplete",
        component:uncomplete,
        exact:true
    },
    {
        path:"/forgetpass",
        component:Forgetpass,
        exact:true
    },


]

export default publicRoutes;
