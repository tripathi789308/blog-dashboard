'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const path = usePathname();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>Blog Dashboard</a>
          </Link>
        </Typography>
        {!path.includes("/new") && <Box>
           <Link href="/post/new" passHref legacyBehavior>
            <Button color="inherit" component="a" startIcon={<AddCircleOutlineIcon />}>Add New Post</Button>
           </Link>
        </Box>}
      </Toolbar>
    </AppBar>
  );
}