import {createContext, useContext} from "react";

enum Role {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin",
}

const loginContext = createContext({
    login: false,
    role: Role.STUDENT as Role,
    setLogin: (_login: boolean, _role: Role = Role.STUDENT) => {},
});

const { Provider: LoginProvider} = loginContext;


function useLogin() {
    return useContext(loginContext);
}

export  {
    LoginProvider,
    useLogin,
    Role,
};