import { Link } from "react-router-dom";
import Headers from "./Headers";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
       
        const password = form.password.value;
        const email = form.email.value;
        console.log(email,password,name);

        // login 
        login(email, password)
        .then(result => {
            console.log(result);

            const user = {
                email,
                lastLoggedAt : result?.user?.metadata?.lastSignInTime
            }

            fetch('https://coffee-store-server-rho-lovat.vercel.app/user',{
                method : "PATCH",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            // update last logged in the databasse 
        })
        .then(error => {
            console.log(error);
        })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Headers></Headers>
            <h1 className="text-5xl font-bold my-5 text-center">Please Login</h1>
            <form 
            onSubmit={handleLogin}
            className="w-1/2 mx-auto space-y-2">
                

               

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" className="grow" name="email" placeholder="Email" />
                </label>
               
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" name="password" placeholder="password" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                <input type="submit" value="submit" className="grow"  />
                </label>
                <p>New in this web <Link to="/register"> <span className="font-bold ">Register</span></Link></p>
            </form>
        </div>
    );
};

export default Login;