import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Complete from '../pages/Complete';
import Uncomplete from '../pages/Uncomplete';
import Confirm from '../pages/Confirm';
import Profile from '../pages/Profile';
import Forgetpass from '../pages/Forgetpassword';


const publicRoutes = [
    {
        path:"/signup",
        component:Signup,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },

    {
        path:"/complete",
        component:Complete,
        exact:true
    },
    {
        path:"/uncomplete",
        component:Uncomplete,
        exact:true
    },
    {
        path:"/forgetpass",
        component:Forgetpass,
        exact:true
    },
    {
        path:"/confirm",
        component:Confirm,
        exact:true
    },
    {
        path:"/profile",
        component:Profile,
        exact:true
    },


]

export default publicRoutes;
