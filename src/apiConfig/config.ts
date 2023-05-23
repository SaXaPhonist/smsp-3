import axios from "axios";

if(!process.env.NEXT_PUBLIC_PROXY_SECRET){
    throw Error('Required key not found!')
}

export const apiClient = axios.create({
    baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0',
    headers: {
        'x-secret-key': process.env.NEXT_PUBLIC_PROXY_SECRET,
        'X-Api-App-Id': process.env.NEXT_PUBLIC_CLIENT_SECRET
    }
})