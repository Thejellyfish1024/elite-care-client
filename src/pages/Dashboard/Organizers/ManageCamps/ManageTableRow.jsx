/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useRegistrationCount from '../../../../hooks/useRegistrationCount';


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



const ManageTableRow = ({ camp }) => {

    const {data } = useRegistrationCount(camp?._id);
    // console.log(data);

    return (
        <>
            <StyledTableRow key={camp?._id}>
                <StyledTableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                    {camp?.campName}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.scheduledDateTime}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{camp?.venue}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${camp?.campFees}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{data?.totalRegistration}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <button className='bg-red-500 hover:bg-black text-white py-2 px-4 rounded-lg'>Delete</button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                <button className='bg-green-600 hover:bg-green-900 text-white py-2 px-4 rounded-lg'>Update</button>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
};

export default ManageTableRow;