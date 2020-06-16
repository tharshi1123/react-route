import welcome from "../pages/welcome";
import login from "../pages/login";
import signup from "../pages/signup";
import complete from "../pages/complete";
import uncomplete from "../pages/uncomplete";


const publicRoutes = [
  {
  path:"/",
  component:welcome,
  exact:true,
},
{
  path:"/login",
  component:login,
  exact:true
},
{
  path:"/signup",
  component:signup,
  exact:true
},
{
  path:"/complete",
  component:complete,
  exact:true
},
{
  path:"/uncomplete",
  component:uncomplete,
  exact:true
},
];
export default publicRoutes;
