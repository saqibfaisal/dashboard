import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

function User() {
    function createData(serialno, name, fatherName, age, email) {
        return { serialno, name, fatherName, age, email }
    }
    const rows = [
        createData(1, "Saqib", "M.Faisal", 17, "saqibfaisalofficial@gmail.com"),
        createData(2, "AbdulSattar", "Ashraf", 17, "AbdulSattarAshraf@gmail.com"), 
        createData(3, "Anas", "Yaqoob", 17, "AnasYaqoob@gmail.com"),
        createData(4, "Ammar", "Yasir", 17, "AmmarYasir@gmail.com"),
        createData(5, "Ahtisham", "AhmedAli", 17, "AtishamAhmedAli@gmail.com"),
    ];
    return(
        <TableContainer component={Paper } sx={{ mt: 10 }}>
        <Table sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>S.no</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>Name&nbsp;</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>FatherName&nbsp;</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>Age&nbsp;</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (

                    <TableRow >
                        <TableCell>{row.serialno}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.fatherName}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}
export default User