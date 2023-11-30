import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useProfile = (email) => {
    const {loading} = useAuth();
    const axiosPublic = useAxiosPublic()
    // console.log('email', email);
    const {data, refetch} = useQuery({
        queryKey: ['profileData', email],
        enabled : !loading,
        queryFn: async () =>{
           const data = await axiosPublic.get(`/users/${email}`)
           return await data.data;
        }
    })
    console.log('use profile',data);

    return {data, refetch};

};

export default useProfile;

