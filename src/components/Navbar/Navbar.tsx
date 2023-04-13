'use client';
import React from 'react'
import {Avatar, Box, Stack} from "@mui/material"
import Link from 'next/link'
import Image from 'next/image'
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  

function Navbar() {
  return (
    <Box data-testid="Navbar_1" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"#2F2C2C", width:"100%", textDecoration:"uppercase", padding: "0 4rem"}}>
        <Image data-testid="Navbar_logo" src="/images/HMH_logo.png" alt="Heavy Metal Heaven" width="130" height="120" />
        <Box sx={{display:"flex", gap:2, textTransform:"uppercase"}}>
            <Link href="">home</Link>
            <Link href="">products</Link>
            <Link href="">about</Link>
            <Link href="">support</Link>
        </Box>
        <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"red"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Explore into the abyse"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction="row" spacing={4}>
            <ShoppingCartIcon fontSize="large" />
            <Avatar src="/broken-image.jpg" />
          </Stack>
    </Box>
  )
}

export default Navbar