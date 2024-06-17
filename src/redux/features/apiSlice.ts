import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({
            baseUrl: import.meta.env.VITE_PUBLIC_API_URL,
            prepareHeaders: (headers, { endpoint }) => {
                const endpointsWithoutAuth = [
                    `${import.meta.env.VITE_PUBLIC_API_URL}/auth/sign-in`
                ];
                if (!endpointsWithoutAuth.includes(endpoint)) {
                    const token = localStorage.getItem("ukwazi-v3Idr-userToken");
                    if (token) {
                        headers.set("Authorization", `Bearer ${token}`);
                    }
                }
                return headers;
            },
        });
        const response = await baseQuery(args, api, extraOptions);
        if (response.error && (response.error.status === 401 || response.error.status === 403)) {
            localStorage.removeItem("ukwazi-v3Idr-userToken");
            localStorage.removeItem("ukwazi-v3Idr-user");
            const navigate = useNavigate();
            navigate("/", { replace: true });
        }
        return response;
    },
    tagTypes: ['Ukwazi'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userDto: any) => ({
                url: "/auth/sign-in",
                method: "POST",
                body: userDto,
            }),
        }),
        getMatchesFiles: builder.query({
            query: () => "/matches-files"
        }),
        getMatchesSearchFiles: builder.query({
            query: () => "/matches-search-files"
        }),
        uploadSearchFile: builder.mutation({
            query: (fileData: any) => ({
                url: "/matches-search-files",
                method: "POST",
                body: fileData
            })
        }),
    }) 
});

export const {
    useLoginMutation,
    useGetMatchesFilesQuery,
    useGetMatchesSearchFilesQuery,
    useUploadSearchFileMutation,
} = apiSlice;
