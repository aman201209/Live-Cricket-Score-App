import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from "./Firebase"
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
const auth = getAuth(app)

export default function Main() {

    let [user, setUser] = useState(false)
    let navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(true)
            } else {
                setUser(false)
            }
        })
    }, [])
    const logout = () => {
        signOut(auth).then((value) => {
            navigate("/login",setAnchorEl(null))
        })
    }
    return (
        <div className='main1'>
            <div className='main2'>
                <div className='img'>
                    <img src="https://www.shutterstock.com/shutterstock/photos/2452278307/display_1500/stock-vector-illustration-of-batsman-playing-cricket-batsman-hitting-the-ball-in-action-cricket-championship-2452278307.jpg" alt="logo" />
                </div>
                <div className='main3'>
                    <b>Cricket</b>
                    <span className='span'>Version 1.0</span>
                </div>
            </div>
            <div className='main4'>
                <Link className='link1' to="/"><div>Home</div></Link>
                <Link className='link1' to="/subscription"><div>Country</div></Link>
                <Link className='link1' to='/series'><div>Series</div></Link>
                <Link className='link1' to='/matches'><div>Matches</div></Link>
                {/* <Link className='link1' to='/point'><div>Points</div></Link> */}
                <Link className='link1' to='/players'><div>Players</div></Link>


                {user ? <div><button className='link1' onClick={logout}>LogOut</button></div> : <Link className='link1' to='/login'><div>login</div></Link>}

            </div>
            <div className='main'>
                <Link className='link1' to="/"><div>Home</div></Link>
                {user ? <div><button className='link1' onClick={logout}>LogOut</button></div> : <Link className='link1' to='/login'><div>login</div></Link>}
            </div>
            <div className='main7'>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    < MenuIcon className='link2' />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => (navigate("/", setAnchorEl(null)))}>Home</MenuItem>
                    <MenuItem onClick={() => (navigate("/series", setAnchorEl(null)))}>Series</MenuItem>
                    <MenuItem onClick={() => (navigate("/matches", setAnchorEl(null)))}>Matches</MenuItem>
                    <MenuItem onClick={() => (navigate("/point", setAnchorEl(null)))}>Points</MenuItem>
                    <MenuItem onClick={() => (navigate("/Players", setAnchorEl(null)))}>Players</MenuItem>
                    <MenuItem >
                        {user ? <div><button style={{
                            borderStyle: 'none', backgroundColor: "transparent",
                            textDecoration: "none"
                        }}onClick={logout}>LogOut</button></div> : <button style={{
                            borderStyle: 'none', backgroundColor: "transparent",
                            textDecoration: "none"
                        }} onClick={() => (navigate("/login", setAnchorEl(null)))} >LogIn</button>}
                    </MenuItem>
                </Menu>
            </div>
        </div>

    )
}
