import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Tooltip } from '@mui/material';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
function ApiCheck() {
    const [data, setData] = useState([])
    let Navigate = useNavigate()
    let Dataget = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((succ) => {
                // console.log(succ)    
                setData(succ?.data)
            })
            .catch((err) => { alert(err) })
    }
    useEffect(() => {
        Dataget(); console.log()
    }, [])
    // let Post =()=>{
    //     let obj = {
    //         body: "abc",
    //         title: "ABC Title",
    //         userId: 3,
    //       };
    //     axios.post('https://fakestoreapi.com/products',obj)
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         alert(err)
    //     })
    // }
    let Detail = (e) => {
        Navigate("/screen", {
            state: {
                item: { e }
            }
        })
    }
    let location = useLocation()
    console.log(location.data)
    return (
        <>
            <Grid container>
                {data?.map((e, i) => {
                    // console.log(e, "OO");
                    return (
                        <Grid item md={3} xs={12} sm={6} key={i}>
                            <Box style={{ m: 2 }}>
                                <Card sx={{ maxWidth: 350, m: 2 }}>
                                    <Typography variant="h5" mb={3}>{e.category}</Typography>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={e.image}
                                        sx={{ objectFit: 'contain' }}
                                    />
                                    <CardContent>
                                        <Tooltip title={e.title}>
                                            <Typography
                                                sx={{ height: 40, overflow: "hidden" }}
                                                variant="h6"
                                            >
                                                {e.title}
                                            </Typography>
                                        </Tooltip>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => Detail(e)} size="small">Detail</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
export default ApiCheck;