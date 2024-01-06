import LoginButton from "../auth/login.auth";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../auth/profile.auth";
import LogoutButton from "../auth/logout.auth";

const LoginRoute = () => {
   const { isAuthenticated } = useAuth0();


   return (
      <div>
         {
            !isAuthenticated && <LoginButton />
         }
         {
            isAuthenticated && <Profile />
         }
         {
            isAuthenticated && <LogoutButton />
         }
      </div>
   );
}
export default LoginRoute;