import httpService from "../httpService";

const api = 'http://localhost:8090/api/v1/item';

export function getAllFood(){
    return httpService.get(api);
}
