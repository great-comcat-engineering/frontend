"use client";

import ApiClient from "@/services/api-client";
import { useQuery } from "react-query";

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: "user",
        queryFn: async () => {
            return ApiClient.product.getAllProducts();
        },
        retry: false,
        refetchOnWindowFocus: false,
    });

    return (
        <main className="container mx-auto">
            <div className="flex flex-col items-center justify-center min-h-screen py-2 h-[2vh]">
                {isLoading ? "Loading..." : <>{JSON.stringify(data)}</>}
            </div>
        </main>
    );
}
