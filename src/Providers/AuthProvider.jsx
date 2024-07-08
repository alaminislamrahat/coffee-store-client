import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Fir/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loadin, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const login = (email,passwor) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,passwor);
    }

    const info = {
        user,
        loadin,
        register,
        login,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;