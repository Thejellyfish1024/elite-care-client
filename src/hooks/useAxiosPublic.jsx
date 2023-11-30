import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://elite-care-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;