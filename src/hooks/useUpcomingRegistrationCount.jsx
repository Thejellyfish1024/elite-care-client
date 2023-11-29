
    
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUpcomingRegistrationCount = (_id) => {

    const axiosPublic = useAxiosPublic()

    const { data , refetch} = useQuery({
        queryKey: ['upcomingRegistrationCount', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcoming-registration-stat/${_id}`)
            return res.data;
        }
    })
    // console.log('use camps data',data);

    return {data, refetch};
};

export default useUpcomingRegistrationCount;