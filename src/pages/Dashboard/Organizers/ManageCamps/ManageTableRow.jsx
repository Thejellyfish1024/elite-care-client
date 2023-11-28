/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useRegistrationCount from '../../../../hooks/useRegistrationCount';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import UpdateModal from './UpdateModal';
import { useState } from 'react';


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



const ManageTableRow = ({ camp, refetch }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const axiosSecure = useAxiosSecure();

    const { data } = useRegistrationCount(camp?._id);
    // console.log(data);

    const handleDelete = () => {
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
                await axiosSecure.delete(`/medical-camps/${camp?._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Camp has been deleted.",
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
                    {camp?.campName}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.scheduledDateTime}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.venue}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${camp?.campFees}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{data?.totalRegistration}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button onClick={handleDelete} className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button onClick={handleOpen} className='bg-green-600 hover:bg-green-900 text-white py-2 px-4 rounded-lg'>Update</button>
                </StyledTableCell>
            </StyledTableRow>
            <UpdateModal camp={camp} open={open} refetch={refetch} setOpen={setOpen}></UpdateModal>
        </>
    );
};

export default ManageTableRow;