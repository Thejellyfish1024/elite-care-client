
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCamps = () => {

    const axiosPublic = useAxiosPublic()

    const {data, refetch} = useQuery({
        queryKey: ['medicalCamps'],
        queryFn: async () =>{
           const data = await axiosPublic.get('/popularCamps')
           return await data.data;
        }
    })
    console.log('use camps data',data);

    return {data, refetch};
};

export default useCamps;