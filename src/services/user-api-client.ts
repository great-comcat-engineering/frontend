import { AxiosInstance, AxiosResponse } from "axios"

export default class UserApiClient {

    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getUser() {
        return this.client.get("/user");
    }

}