
/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme?.palette?.common?.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const RegisteredTableRow = ({ camp, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ['medicalCamp', camp?.campId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medical-camp/${camp?.campId}`)
            return res?.data;
        }
    })
    console.log('camp', data);

    const handCancel = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axiosSecure.delete(`/registered-camp/${camp?._id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res?.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                icon: "success"
                            });
                        }

                    })


            }
        });
    }

    return (
        <>
            <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                    {data?.campName}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{data?.scheduledDateTime}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{data?.venue}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${data?.campFees}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button disabled={camp?.payment === 'paid' ? true : false}
                        className={` ${camp?.payment === 'paid' ? 'bg-green-500 ' : 'bg-red-500 hover:bg-red-800'} text-white py-2 px-4 rounded-lg`}>{camp?.payment}</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button className={` ${camp?.status === 'confirmed' ? 'bg-green-500 ' : 'bg-red-500'} text-white py-2 px-4 rounded-lg`}>{camp?.status}</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button onClick={handCancel} disabled={camp?.payment === 'paid' ? true : false}
                        className={` text-white py-2 px-4 rounded-lg
                     ${camp?.payment === 'paid' ? 'bg-gray-300' : 'bg-red-500 hover:bg-red-800'}`}>Cancel</button>
                </StyledTableCell>
            </StyledTableRow>

        </>
    );
};

export default RegisteredTableRow;