import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProfile = (email) => {
    const {loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    // console.log('email', email);
    const {data, refetch} = useQuery({
        queryKey: ['profileData', email],
        enabled : !loading,
        queryFn: async () =>{
           const data = await axiosSecure.get(`/users/${email}`)
           return await data.data;
        }
    })
    console.log('use profile',data);

    return {data, refetch};

};

export default useProfile;

