import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = () => {
    const { register } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });

    function onSubmit(data) {
        console.log("Data submitted: ", data);
    }

    return (
        <div className="login-form">
            <form onSubmit={console.log(onSubmit)} noValidate>
                <label htmlFor="inputEmail">E-mail</label>
                <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    ref={register({
                        required: "Enter your e-mail",
                        // pattern: {
                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        //     message: "Enter a valid e-mail address",
                        // },
                    })}
                />


                <label htmlFor="inputPassword">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    name="password"
                // ref={register({ required: "Enter your password" })}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;