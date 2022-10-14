import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Admin() {

    return (
        <Box sx={{ background: "rgb(142,156,226)", width: "100%", height: "250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>Welcome Admin</Typography>
        </Box>
    )
}
export default Admin