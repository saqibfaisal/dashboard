import * as React from 'react';
import { Button, ListItem } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../dashboard screen/admin";
import Feedback from "../dashboard screen/feedback"
import User from "../dashboard screen/user"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
function DashBoard() {
    const drawerWidth = 240;

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    let Navigate = useNavigate()
    let AdminPanel = () => {
        Navigate("admin")
    }
    let UserPanel = () => {
        Navigate("user")
    }
    // let FeedbackPanel = () => {
    //     Navigate("feedback")
    // }
    
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        <ListItem>
                            <DashboardIcon />
                            DashBoard
                        </ListItem>
                    </List>
                    <Divider />
                    <List sx={{ display: "flex", flexDirection: "column", spacing: 5 }}>
                        <ListItem>
                            <AdminPanelSettingsIcon />

                            <Button sx={{ color: "#262635" }} onClick={() => AdminPanel()}>Admin</Button>
                        </ListItem>
                        <ListItem>
                            <AccountCircleIcon />
                            <Button sx={{ color: "#262635" }} onClick={() => UserPanel()}>User</Button>
                        </ListItem>
                        {/* <ListItem> */}
                            {/* <Button sx={{ color: "#262635" }} onClick={() => FeedbackPanel()}>Feedback</Button> */}
                        {/* </ListItem> */}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />

                    <Routes>
                        <Route path="user" element={<User />} />
                        {/* <Route path="feedback" element={<Feedback />} /> */}
                        <Route path='admin' element={<Admin />} />
                    </Routes>
                </Main>
            </Box>
        </div>
    )
}
export default DashBoard