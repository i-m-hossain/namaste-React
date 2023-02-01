import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LoginContainer = ({ children }) => {
    return (
        <div className="bg-pink-100 min-h-screen flex items-center">
            <div className="p-8 lg:w-1/2 mx-auto">
                <div className="bg-white rounded-t-lg p-8">
                    <p className="text-center text-sm text-gray-400 font-light">
                        Sign in with
                    </p>
                    <div>
                        <div className="flex items-center justify-center space-x-4 mt-3">
                            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-pink-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                <AiFillGithub className="w-6 h-6 mr-3 text-gray-700"/>
                                Github
                            </button>
                            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent  shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                <FcGoogle className="w-6 h-6 mr-3 "/>
                                <span className="text-pink-500 hover:text-gray-700"> Google</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                    <p className="text-center text-sm text-gray-500 font-light mb-3">
                        Or sign in with credentials
                    </p>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default LoginContainer;
