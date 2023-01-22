import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(70, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn){
            navigate("/");
        }
    }, [isLoggedIn]);
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
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
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <br />
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="First name"
                            />
                            <ErrorMessage name="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <br />
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                            />
                            <ErrorMessage name="lastName" />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <br />
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label htmlFor="password"> Password</label>
                            <br />
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default Login;
