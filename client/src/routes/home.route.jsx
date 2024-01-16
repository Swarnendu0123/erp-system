import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../auth/profile.auth";
import LoginButton from "../auth/login.auth";
import LogoutButton from "../auth/logout.auth";
import Navigation from "../components/navigation";
import Dashboard from "../components/dashboard";
const Home = () => {
    const { isAuthenticated, user} = useAuth0();
    console.log(user);
    return (
        <div>
            <Navigation/>
            <Dashboard/>
        </div>
    )
}

export default Home;