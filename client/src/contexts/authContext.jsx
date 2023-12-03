import { createContext } from "react";
import { useNavigate } from "react-router-dom";


import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";


const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({   // This is a component that helps to outsource state and handlers to a outside file and that way they are not in the App component
    children,   // children is existing property of every react component. Every child of the component will be attached to this property by default
}) => {
    const navigate = useNavigate();
    
    // useState can work with functions too! You can write a arrow fn and return something from it
    
    const [auth, setAuth] = usePersistedState('auth', {})   


    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        // Here i must hava validation for the "Confirm Password"

        const result = await authService.register(
            values.email,
            values.password
        );

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = async() => {
        // await authService.logout()
        setAuth({});
        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email, // This means if you dont have username then use email instead
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken, //  "!!" can be used to convert falsy or thruthy values to boolean values. For example: undefined -> false
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
