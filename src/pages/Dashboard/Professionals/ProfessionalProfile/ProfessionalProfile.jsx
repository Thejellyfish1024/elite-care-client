import useAuth from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";
import CommonProfile from "../../../Shared/CommonProfile/CommonProfile";


const ProfessionalProfile = () => {
    const { user } = useAuth();
    const { data } = useProfile(user?.email)
    return (
        <div>
            <CommonProfile></CommonProfile>
                <h2 className="text-3xl font-bold text-center mt-16 ">Additional Information</h2>
            <div className="bg-gray-600 py-5 text-white m-16" >
                <div className="flex justify-evenly gap-5 my-8">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">Doctor {data?.name}</h2>
                        <div className="pl-8 font-semibold">
                            <p>Surgeon, Cardiologist</p>
                            <p>Fellowship (Dental surgeon),</p>
                            <p>MS(Medicine), FCPS, MBBS</p>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-lg font-bold">Experience : 5+ Years</p>
                            <p className="text-lg font-bold">Languages : English, Spanish</p>
                            <p className="text-lg font-bold">Types of : Surgeon</p>

                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-5 uppercase">Specialty</h3>
                        <div className="flex gap-3">
                            <p className="py-2 px-4 rounded-full border w-fit border-orange-500">Dentistry</p>
                            <p className="py-2 px-4 rounded-full border w-fit border-orange-500">Surgery</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                            <p className="py-2 px-4 rounded-full border w-fit border-orange-500">Implantology</p>
                            <p className="py-2 px-4 rounded-full border w-fit border-orange-500">Paediatric</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <p className="font-bold  text-center">
                            Email : {user?.email}
                        </p>
                        <p className="font-bold text-center">
                            Address : Mirpur-10, Dhaka
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalProfile;