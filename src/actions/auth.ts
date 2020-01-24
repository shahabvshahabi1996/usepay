import {Login , Signup , Logout} from '../constants/types';


export const LoginAction = (token:string) => {
    return (dispatch:any) => {

        localStorage.setItem("token",token);

        dispatch({
            type : Login,
            payload : token
        })
    }
}


export const SignUpAction = (token:string) => {
    return (dispatch:any) => {

        localStorage.setItem("token",token);

        dispatch({
            type : Signup,
            payload : token
        })
    }
}

export const LogOutAction = () => {
    return (dispatch:any) => {

        localStorage.removeItem("token");

        dispatch({
            type : Logout,
            payload : ""
        })
    }
}