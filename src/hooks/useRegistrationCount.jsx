
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRegistrationCount = (_id) => {

    const axiosPublic = useAxiosPublic()

    const { data , refetch} = useQuery({
        queryKey: ['registrationCount', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/registration-stat/${_id}`)
            return res.data;
        }
    })
    // console.log('use camps data',data);

    return {data, refetch};
};

export default useRegistrationCount;