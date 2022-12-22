import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin=()=>{
    const[error, setError] =useState(null)
    const[isLoding, setIsLoading] = useState(null) 
    const {dispatch}=useAuthContext()

    const login = async (email, password)=>{
        setIsLoading(true)
        setError(false)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers:{ "Content-Type":"application/json"}, 
            body:JSON.stringify({email, password})
        })
        const json = await response.json() 

        if(!response.ok){
            setIsLoading(false) 
            setError(true)
        }
        if(response.ok){

            dispatch({type:'LOGIN', payload:json})
        }
    }
    return{error, isLoding, login}
}

export default useLogin;