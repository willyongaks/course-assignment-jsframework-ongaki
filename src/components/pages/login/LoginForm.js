import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import { TOKEN_PATH, BASE_URL } from "../../../constants/api/Api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { Form, FormLabel, FormControl, FormGroup, Button } from "react-bootstrap";



const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("please enter your username"),
    password: yup.string().required("please enter your password")

})
function LoginForm() {
    const navigate = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);


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
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const responseJson = await response.json();
            console.log(responseJson);
            setAuth(responseJson)
            navigate("/admin");
        }catch (error){
            console.log("error", error);
            setLoginError(error);
        }finally{
            setSubmitting(false)
        }
    }

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)} className="login-form text-center text-md-start d-flex flex-column justify-content-center">
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <FormGroup>
                    <FormLabel>Username</FormLabel><br/>
                    <FormControl name="username" placeholder="username" {...register("username")} className="form-control" autoComplete="off"/>
                    {errors.username && <FormError>{errors.username.message}</FormError>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>password</FormLabel><br/>
                    <FormControl name="password" placeholder="password" {...register("password")} type="password" autoComplete="off"/>
                    {errors.password && <FormError>{errors.password.message}</FormError>}
                </FormGroup>

                <Button>{submitting ? "Loggin in..." : "Login"}</Button>

            </fieldset>
        </Form>
    </>
  )
}

export default LoginForm
