/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

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

const ParticipantsTable = ({ participant , refetch}) => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();
    const { data: camp } = useQuery({
        queryKey: ['participants-registered-camp', participant?.campId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp-details/${participant?.campId}`)
            return res?.data;
        }
    })
    // console.log('camp', camp);


    const handlePending = () => {


        Swal.fire({
            title: "Status Confirmed?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.patch(`/registered-participants/${participant?._id}`)
                    .then(res => {
                        console.log(res?.data);
                        if (res?.data?.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Confirmed!",
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
                    {participant?.name}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.campName}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.scheduledDateTime}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.venue}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${camp?.campFees}</StyledTableCell>

                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button className={` ${participant?.payment === 'paid' ? 'bg-green-500 ' : 'bg-red-500'} text-white py-2 px-4 rounded-lg`}>{participant?.payment}</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button onClick={handlePending} className={` ${participant?.status === 'confirmed' ? 'bg-green-500 ' : 'bg-red-500'} text-white py-2 px-4 rounded-lg`}>{participant?.status}</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button className={`bg-red-600  text-white py-2 px-4 rounded-lg 
                    ${participant?.payment === 'paid' ? '' : 'hidden'}`}>Cancel</button>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
};

export default ParticipantsTable;