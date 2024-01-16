import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Dashboard = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => () => {
        navigate(path);
    }
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <>{isAuthenticated &&
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                    <button class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition" onClick={navigateTo("/subject-reg")}>
                        <div class="p-4 md:p-5">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 ">
                                        Subject Registration
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        Register Your Subjects
                                    </p>
                                </div>
                                <div class="ps-3">
                                    <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        }
            {!isAuthenticated && <div>
                Please Login to view Dashboard
            </div>
            }
        </>
    )
}

export default Dashboard;