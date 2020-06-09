import welcome from "../pages/welcome";
import login from "../pages/login";
import signup from "../pages/signup";
import about from "../pages/about";

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
  path:"/about",
  component:about,
  exact:true
},
];
export default publicRoutes;
