
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProfessionalCount = (_id) => {

    const axiosPublic = useAxiosPublic()

    const { data, refetch } = useQuery({
        queryKey: ['professionalCount', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/professional-stat/${_id}`)
            return res.data;
        }
    })
    // console.log('use camps data',data);

    return { data, refetch };
};

export default useProfessionalCount;