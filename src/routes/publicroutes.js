import Welcome from '../pages/Welcome';
import Login from '../pages/Login';



const publicRoutes = [
    {
        path:"/welcome",
        component:Welcome,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },



]

export default publicRoutes;
