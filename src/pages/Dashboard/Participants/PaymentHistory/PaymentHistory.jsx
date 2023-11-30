
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import PaymentRow from './PaymentRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme?.palette?.common?.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();

    const {user} = useAuth();
    const {data : payments}  = useQuery({
        queryKey:['paymentHistory', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/payment-history/${user?.email}`)
            return res.data;
        }
    })
    console.log('payments', payments);
    
    return (
        <div className="p-5">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ textAlign: 'center' }}>Camp Name</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Location</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Payment Date</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Paid Fee</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Transaction Id</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Payment Status</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Confirmation</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments?.map((payment) => <PaymentRow key={payment?._id} payment={payment}></PaymentRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PaymentHistory;