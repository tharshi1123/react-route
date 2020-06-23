import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Complete from '../pages/Complete';
import Uncomplete from '../pages/Uncomplete';

import Forgetpass from '../pages/Forgetpass';


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


]

export default publicRoutes;
