import dataProvider from "../../dataProvider";
import { FormDataTypes } from "../../types";

let fetcher = dataProvider('userInstance')

export const signIn = async(data:FormDataTypes)=>{
    return fetcher.post('/login', data)
}

export const signUp = async(data:FormDataTypes)=>{
    return fetcher.post('/register', data)
}