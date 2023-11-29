
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCamps = (camps) => {

    const axiosPublic = useAxiosPublic()

    const {data, refetch} = useQuery({
        queryKey: [camps],
        queryFn: async () =>{
           const data = await axiosPublic.get(`${camps}`)
           return await data.data;
        }
    })
    // console.log('use camps data',data);

    return {data, refetch};
};

export default useCamps;