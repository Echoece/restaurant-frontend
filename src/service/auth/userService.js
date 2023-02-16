import httpService from "../httpService";
import axios from "axios";

const api = 'http://localhost:8090/api/v1/user';

export function register(user){
    // removing jwt token, as it is creating error.
    delete axios.defaults.headers.common["Authorization"];

    return httpService.post(api,{
        password: user.password,
        email: user.email
    });
}
