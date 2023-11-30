
/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useQuery } from '@tanstack/react-query';
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



const PaymentRow = ({ payment }) => {
    const axiosSecure = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ['medicalCamp', payment?._id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medical-camp/${payment?.campId}`)
            return res?.data;
        }
    })
    console.log('camp', data);

 

    return (
        <>
            <StyledTableRow>
                <StyledTableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
                    {data?.campName}
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{data?.venue}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>{payment?.date}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${data?.campFees}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>${payment?.transactionId}</StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                    <p className='font-bold'>Paid</p>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ textAlign: 'center' }}>
                <p className='font-bold'>{payment?.status}</p>
                </StyledTableCell>
               
            </StyledTableRow>

        </>
    );
};

export default PaymentRow;