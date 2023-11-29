
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import RegisteredTableRow from './RegisteredTableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme?.palette?.common?.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));





const RegisteredCamps = () => {
    const axiosSecure = useAxiosSecure();

    const {user} = useAuth();
    const {data : camps, refetch}  = useQuery({
        queryKey:['registeredCamps', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/registered-camps/${user?.email}`)
            return res.data;
        }
    })
    console.log('regis', camps);
    
    return (
        <div className="p-5">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ textAlign: 'center' }}>Camp Name</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Scheduled Date</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Location</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Camp Fee</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Payment Status</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Confirmation</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {camps?.map((camp) => <RegisteredTableRow key={camp?._id} camp={camp} refetch={refetch}></RegisteredTableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RegisteredCamps;