import axios from "axios";
import AppConfig from "@/config/appConfig";
import UserApiClient from "./user-api-client";
import ProductApiClient from "./product-api-client";

const API_BASE = AppConfig.apiEndpoints.base + AppConfig.apiEndpoints.version;

const client = axios.create({
    baseURL: API_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

class ApiClient {
    static user = new UserApiClient(client);
    static product = new ProductApiClient(client);
}

export default ApiClient;