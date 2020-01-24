import {Login , Logout , Signup} from '../constants/types';
import {IAuthAction , IAuthState} from '../constants/interfaces';

const initialState : IAuthState =  {
    token : ""
}

const AuthReducer = (state = initialState , action:IAuthAction ) => {
    switch(action.type) {
        case Login : {
            return {
                ...action.payload,
                ...state
            }
        }

        case Logout : {
            return {
                ...action.payload,
                ...state
            }
        }

        case Signup : {
            return {
                ...action.payload,
                ...state
            }
        }

        default : {
            return state
        }
    }
}


export default AuthReducer;