import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ParticipantsTable from "./ParticipantsTable";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme?.palette?.common?.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const ManageRegisteredCamps = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data, refetch } = useQuery({
        queryKey: ['/registeredParticipants'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registered-participants/${user?.email}`)
            return res.data;
        }
    })
    console.log(data);
    return (
        <div className="p-5">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Participant</StyledTableCell>
                            <StyledTableCell sx={{ textAlign: 'center' }}>Camp Name</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Scheduled Date</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Location</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Camp Fee</StyledTableCell>
                            
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Payment</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Confirmation</StyledTableCell>
                            <StyledTableCell align="right" sx={{ textAlign: 'center' }}>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((participant) => <ParticipantsTable key={participant._id} refetch={refetch} participant={participant}></ParticipantsTable>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageRegisteredCamps;