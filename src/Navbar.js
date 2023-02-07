// import React from 'react'

// function Navbar() {
//   return (
//     <nav className="navbar">
//         <h1>Trial Clinic</h1>
//         <div className="links">
//             <a href="/">Home</a>
//             <a href="/create" style={{
//                 color:"white",
//                 backgroundColor:'blue',
//                 borderRadius:"8px"
//             }}>Appointment schedule</a>
//         </div>
//     </nav>
//   )
// }
// export default Navbar
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { Link } from 'react-router-dom';
// 
function Navbar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TRIAL CLINIC
                    </Typography>
                    <Typography>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to="/appointments" style={{
                        color:"white",
                        backgroundColor:'blue',
                        borderRadius:"8px"
                        }}>Appointments</Link>
                    </div>
                    </Typography>
                   <Link to ='/login'><Button color="inherit">Login</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>

    </div>
  )
}
// 
export default Navbar