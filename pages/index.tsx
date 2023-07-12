import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Box, Grid } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { MainLayout } from '../components';
import SideNav from '@/components/common/nav/side-nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3} sx={{ bgcolor: deepOrange[500] }}>
                Box 1
            </Grid>
            <Grid item xs={8} sx={{ bgcolor: deepPurple[500] }}>
                Box 2
            </Grid>
        </Grid>
    );
}
Home.Layout = MainLayout;
