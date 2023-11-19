import axios, { AxiosPromise } from "axios"
import { FooData } from "../unterface/FooData"
import { useMutation, useQueryClient } from "react-query"

const API_URL = 'http://localhost:8080'

const postData = async (data: FooData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data)
    return response
}

export function useFooDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}