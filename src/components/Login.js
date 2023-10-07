import Header from "./Header"
import background from "../assets/images/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
import { useState } from 'react';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={background} />
            </div>
            <form
                className="w-full bg-black bg-opacity-60 max-w-sm p-12 absolute start-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                <h1
                    className="text-white text-3xl mb-4 font-semibold">
                    {isSignIn ? "Sign in" : "Sign up"}</h1>
                {!isSignIn && <input
                    type="text"
                    placeholder="Full Name"
                    className="my-2 p-3 w-full focus:bg-gray-700 outline-0 text-white bg-gray-800 rounded-md" />}
                <input
                    type="email"
                    placeholder="email address"
                    className="my-2 p-3 w-full focus:bg-gray-700 outline-0 text-white bg-gray-800 rounded-md" />
                <input type="password"
                    placeholder="Password"
                    className="my-2 p-3 w-full focus:bg-gray-700 outline-0 text-white bg-gray-800 rounded-md" />
                <button
                    type="button"
                    className="text-white w-full p-3 my-2 bg-red-600 font-bold rounded-md">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="my-2 text-gray-500">{isSignIn ? "New to Netflix?" : "Existing user?"}
                    <span
                        onClick={toggleSignIn}
                        className="text-white cursor-pointer">{isSignIn ? " Sign Up now" : " Sign In now"}</span></p>
            </form>
        </div>
    )
}

export default Login