import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProfile = (email) => {

    const axiosSecure = useAxiosSecure()
    // console.log('email', email);
    const {data, refetch} = useQuery({
        queryKey: ['profileData', email],
        queryFn: async () =>{
           const data = await axiosSecure.get(`/users/${email}`)
           return await data.data;
        }
    })
    console.log('use profile',data);

    return {data, refetch};

};

export default useProfile;

