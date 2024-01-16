import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);

    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800">
                        Profile
                    </h2>
                    <p className="text-sm text-gray-600 ">
                        Manage your name, password and account settings.
                    </p>
                </div>

                <form />

                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                    <div className="sm:col-span-3">
                        <label className="inline-block text-sm text-gray-800 mt-2.5">
                            Profile photo
                        </label>
                    </div>


                    <div className="sm:col-span-9">
                        <div className="flex items-center gap-5">
                            <img className="inline-block h-16 w-16 rounded-full ring-2 ring-white " src={isAuthenticated && user.picture} alt="Image Description" />

                        </div>
                    </div>


                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 ">
                            Full name
                        </label>
                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle ms-1">
                                <svg className="inline-block w-3 h-3 text-gray-400 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </button>
                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm " role="tooltip">
                                Displayed on public forums, such as Preline
                            </span>
                        </div>
                    </div>


                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <div id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Maria" >{isAuthenticated && user.name}</div>
                        </div>
                    </div>


                    <div className="sm:col-span-3">
                        <label for="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 ">
                            Email
                        </label>
                    </div>


                    <div className="sm:col-span-9">
                        <div id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="maria@site.com" >{isAuthenticated && user.email}</div>
                    </div>
                </div>




            </div>

        </div>

    )
}

export default Profile;