import httpService from "../httpService";
import jwt_decode from 'jwt-decode'
import axios from "axios";


const apiEndpoint ='http://localhost:8090/login';
const tokenKey = "token";
// to get rid of bi-directional dependency between http and auth service
httpService.setJwt(getJWT());

export async function login(name,password){
    const response = await httpService.post(apiEndpoint,{username:name,password},{
        headers:{ 'Authorization': ""}
    });
    // const{data:jwt}= await httpService.post(apiEndpoint,{username:name,password});
    console.log(response.headers)
    localStorage.setItem(tokenKey,response.headers.get('Authorization'));
    httpService.setJwt(getJWT())
}

export function loginWithJWT(jwt){
    localStorage.setItem(tokenKey,jwt);

}

export function logout(){
    localStorage.removeItem(tokenKey);
    delete axios.defaults.headers.common["Authorization"];
}

export function getJWT(){
    return localStorage.getItem(tokenKey);
}

export function getCurrentUser(){
    try{
        const jwt = localStorage.getItem(tokenKey.replace('Bearer ',''));
        return jwt_decode(jwt);
    }catch (e) {
        return null;
    }
}
