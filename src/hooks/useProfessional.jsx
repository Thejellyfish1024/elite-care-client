import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useProfessional = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const{data : isProfessional, isPending : isProfessionalLoading} = useQuery({
        queryKey: [user?.email, 'isProfessional'],
        enabled : !loading,
        queryFn: async () =>{
            if(!user){
                return ;
            }
            const res = await axiosSecure.get(`/users/professional/${user?.email}`)
            return res?.data?.professional;
        }
    })
    console.log('isProfessional', isProfessional);
    return {isProfessional, isProfessionalLoading};
};

export default useProfessional;