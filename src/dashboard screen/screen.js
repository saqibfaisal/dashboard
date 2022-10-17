import { Card, CardContent, CardMedia, Grid, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useLocation } from "react-router-dom"
function Screen() {
    let location = useLocation()
    let data = location.state.item.e
    console.log(data)
    return (
        <Grid sx={{display:"flex",justifyContent:"center",textAlign:"center",m:10}}>
            {/* <Grid item md={3} xs={12} sm={6} > */}
                <Box style={{ m: 2 }}>
                    <Card sx={{ maxWidth: 400, m: 2 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={data.image}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                            >
                                {data.title}
                            </Typography>
                            <Typography variant="body1">{data.description}</Typography>
                            <Typography variant="h6">Price :${data.price}</Typography>
                        </CardContent>
                    </Card>
                </Box>
            {/* </Grid> */}
        </Grid>
    )
}
export default Screen