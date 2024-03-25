import { AxiosInstance } from "axios"

export default class ProductApiClient {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getAllProducts() {
        return await this.client.get("/product/all");
    }
}