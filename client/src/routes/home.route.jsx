import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../auth/profile.auth";
import LoginButton from "../auth/login.auth";
import LogoutButton from "../auth/logout.auth";

const Home = () => {
    const { isAuthenticated, user} = useAuth0();
    console.log(user);
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
    )
}

export default Home;