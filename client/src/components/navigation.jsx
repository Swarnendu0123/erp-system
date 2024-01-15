import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const { user, isAuthenticated, logout , loginWithRedirect} = useAuth0();
    
    const handleLogIn = ()=>{
        loginWithRedirect()
    }
    const handleLogOut = ()=>{
        logout()
    }


    return (
        <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 ">
            <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                <div class="relative md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <a class="flex-none text-xl font-semibold" href="#" aria-label="Brand">{isAuthenticated? user.name: "Please Login"}</a>
                        <div class="md:hidden">
                            <button type="button" class="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                            <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid ">
                                <a class="font-medium text-blue-600 py-3 md:py-6 " href="#" aria-current="page">Profile</a>

                                <a class="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6 " href="#">
                                    Company
                                </a>

                                <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                                    <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium ">
                                        Resources
                                        <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </button>

                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4  before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                                        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div class="flex flex-col mx-1 md:mx-0">
                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4" href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800 ">Support Docs</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800 ">Explore advice and explanations for all of Preline's features.</p>
                                                    </div>
                                                </a>

                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 " href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800 ">Integrations</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800">Discover the huge range of tools that Preline integrates with.</p>
                                                    </div>
                                                </a>

                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 " href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800 ">API Reference</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800">Build custom integrations with our first-class API.</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="flex flex-col mx-1 md:mx-0">
                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4" href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800">Help Center</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800 ">Learn how to install, set up, and use Preline.</p>
                                                    </div>
                                                </a>

                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 " href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800">Developer Hub</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800 ">Learn how to integrate or build on top of Preline.</p>
                                                    </div>
                                                </a>

                                                <a class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 " href="#">
                                                    <svg class="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                    <div class="grow">
                                                        <p class="font-medium text-gray-800 ">Community Forum</p>
                                                        <p class="text-sm text-gray-500 group-hover:text-gray-800 ">Learn, share, and connect with other Preline users.</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                                                <span class="text-sm font-semibold uppercase text-gray-800">Customer stories</span>

                                              
                                                <a class="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 " href="#">
                                                    <img class="w-32 h-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Image Description"/>
                                                        <div class="grow">
                                                            <p class="text-sm text-gray-800">
                                                                Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.
                                                            </p>
                                                            <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium ">
                                                                Learn more
                                                                <svg class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                            </p>
                                                        </div>
                                                </a>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a class="font-medium text-gray-500 hover:text-gray-400 py-3 md:py-6" href="#">
                                    Join us <span class="py-0.5 px-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-600">4</span>
                                </a>

                               {!isAuthenticated && <div class="pt-3 md:pt-0">
                                    <button class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleLogIn}>
                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        Log in
                                    </button>
                                </div>}
                                {
                                  isAuthenticated && <div class="pt-3 md:pt-0">
                                  <button class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleLogOut}>
                                      <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                      Log out
                                  </button>
                              </div>  
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navigation;