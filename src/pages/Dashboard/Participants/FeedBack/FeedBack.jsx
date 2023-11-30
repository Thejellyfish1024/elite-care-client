import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import FeedBackRow from "./FeedBackRow";

const FeedBack = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res?.data;
        }
    })
    // console.log('payments', payments);
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold text-center mb-10">Attended Camps</h2>
            <div
                className="relative flex flex-col w-full h-full overflow-scroll  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm font-bold antialiased  leading-none text-blue-gray-900 opacity-70">
                                    Camp Name
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                                    Date
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                                    Location
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
                                    Camp Fee
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map(payment => <FeedBackRow key={payment?._id} payment={payment}></FeedBackRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeedBack;