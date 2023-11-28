import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useOrganizer = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const{data : isOrganizer, isPending : isOrganizerLoading} = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        enabled : !loading,
        queryFn: async () =>{
            if(!user){
                return ;
            }
            const res = await axiosSecure.get(`/users/organizer/${user?.email}`)
            return res?.data?.organizer;
        }
    })
    console.log('isOrganizer', isOrganizer);
    return {isOrganizer, isOrganizerLoading};
};

export default useOrganizer;