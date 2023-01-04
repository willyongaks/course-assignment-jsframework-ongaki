import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import { TOKEN_PATH, BASE_URL } from "../../../constants/api/Api";

const url = BASE_URL + TOKEN_PATH;

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

    async function onSubmit(data){
        console.log("data", data); 
        setSubmitting(true);
        setLoginError(null);
        try{
            const response = await fetch(url, {
                mode: 'no-cors',
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const responseJson = await response.json();
            console.log(responseJson);
        }catch (error){
            console.log("error", error);
            setLoginError(error);
        }finally{
            setSubmitting(false)
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <label>Username</label><br/>
                    <input name="username" placeholder="username" {...register("username")} />
                    {errors.username && <FormError>{errors.username.message}</FormError>}
                </div>
                <div>
                    <label>password</label><br/>
                    <input name="password" placeholder="username" {...register("password")} type="password"/>
                    {errors.password && <FormError>{errors.password.message}</FormError>}
                </div>

                <button>{submitting ? "Loggin in..." : "Login"}</button>

            </fieldset>
        </form>
    </>
  )
}

export default LoginForm
