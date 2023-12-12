import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['About', 'Portfolio', 'Videos'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="100%" sx={{backgroundColor:"black"}}>
      <Toolbar disableGutters sx={{width: "100%"}}>

      <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              backgroundColor: "red",
              color: "antiquewhite",
              flexWrap: 'wrap', // Allow items to wrap
              width: '15%', // Occupy full width
              '& .MuiMenuItem-root': {
                width: '15%', // Adjust width of menu items for wrapping
                boxSizing: 'border-box',
              },
            }}
          >
  <IconButton
    size="large"
    aria-label="learn all about Collin, who you should hire immediately"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="inherit"
  >
    <MenuIcon />
    </IconButton>
   
         
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                width: "100"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center" sx={{width: "100%", textWrap: "wrap", fontFamily: "impact", color: "red", fontSize: "1em"}}>
                    <a href={`/${page}`}>
                    {page}</a>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            Wrap
            sx={{
              mr: 2,
              display: { xl: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'impact',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'red',
              textDecoration: 'none',
              border: "5px solid black",
              padding: "5px"
            }}
          >
            Collin Bullock, Fullstack Developer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', width: "100%", justifyContent: "space-evenly", } }}>
            {pages.map((page, index) => ( // Added index to differentiate styles
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontFamily: "impact",
                  fontSize: "3em",
                  marginRight: index !== pages.length - 1 ? '20px' : '0', // Add right margin except for last link
                }}
              >
                <a href={`/${page}`}>
                  {page}
                </a>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, backgroundColor: "black" }}>
            <Tooltip title="Contact Collin">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Contact him" src="https://ksr-ugc.imgix.net/assets/000/604/050/5617b49fcb0113b5926e8e25b263b5fb_original.jpg?ixlib=rb-4.1.0&w=680&fit=max&v=1369016305&gif-q=50&q=92&s=0f2a2ac5efac639e35a6c9330ab2baf4" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', padding: "20px", justifyContent: "space-evenly"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
        
                <MenuItem onClick={handleCloseUserMenu}>
                <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xl: 'flex', flexDirection: "column", md: 'none' },
              flexGrow: 1,
              fontFamily: 'Impact',
              fontWeight: 700,
              letterSpacing: '.5rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
                    
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{
              mr: 2,
              display: { xl: 'flex', flexDirection: "column", md: 'none' },
              flexGrow: 1,
              fontFamily: 'Impact',
              fontWeight: 700,
              letterSpacing: '.1rem',
              fontSize: "2em",
              color: 'red',
              textDecoration: 'none',
            }}>
              

                  <a href="mailto:collin@collinbullock.com">Collin's Email</a><br />
                  <a href="https://www.linkedin.com/in/collin-bullock/">Collin's LinkedIn</a><br />
                  <a href="https://github.com/CollinABullock">Collin's GitHub</a><br />
                  
                    </Typography>
                </MenuItem>
         
                  </Typography>
                 
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
