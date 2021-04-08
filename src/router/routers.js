import Home from "../components/Home";
import UserDetail from "../components/UserDetail";
import NotFound from "../components/NotFound";

export const Router = [
  {
    path: "",
    component: Home,
    name: "Home",
  },
  {
    path: "/user/:login",
    component: UserDetail,
    name: "UserDetail",
  },
  {
    path: "*",
    component: NotFound,
    name: "NotFound",
  },
];
