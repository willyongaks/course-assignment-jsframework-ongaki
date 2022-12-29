import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    username: yup.string().required("please enter your username"),
    password: yup.string().required("please enter your password")

})

function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema)
    })
  return (
    <>
        <form onSubmit={handleSubmit()}>
            <fieldset disabled={submitting}>
                <div>
                    <label>Username</label><br/>
                    <input name="username" placeholder="username" {...register} />
                </div>
                <div>
                    <label>password</label><br/>
                    <input name="password" placeholder="username" {...register} type="password"/>
                </div>

                <button>{submitting ? "Loggin in..." : "Login"}</button>

            </fieldset>
        </form>
    </>
  )
}

export default LoginForm