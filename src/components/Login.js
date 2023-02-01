import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import { HiMail, HiLockOpen } from "react-icons/hi";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn]);
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                setIsLoggedIn(true);
            }}
        >
            {(props) => (
                <Form>
                    <LoginContainer>
                        <div className="relative">
                            <Field
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="username"
                            />

                            <HiMail
                                className="text-gray-400 absolute left-4 inset-y-0 top-3  flex items-center"
                                size={20}
                            />
                        </div>
                        <ErrorMessage
                            name="email"
                            component={"div"}
                            className="mt-3 text-red-400 font-semibold"
                        />

                        <div className="relative mt-3">
                            <Field
                                type="text"
                                name="password"
                                placeholder="password"
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="username"
                            />

                            <HiLockOpen
                                className=" text-gray-400 absolute left-4 top-3 inset-y-0 flex items-center"
                                size={20}
                            />
                        </div>
                        <ErrorMessage
                            name="password"
                            component={"div"}
                            className="mt-3 text-red-400 font-semibold"
                        />

                        <div className="mt-4 flex items-center text-gray-500">
                            <Field
                                type="checkbox"
                                name="remember"
                                className="mr-3"
                            />

                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button
                                className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                onClick={() => {
                                    setIsLoggedIn(true);
                                }}
                            >
                                Sign in
                            </button>
                        </div>
                    </LoginContainer>
                </Form>
            )}
        </Formik>
    );
};
export default Login;
