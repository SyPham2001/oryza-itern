import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Grid } from '@mui/material';
import { MainLayout } from '../components';
import SideAlarm from '@/components/common/nav/side-alarm';
import Description from '@/components/common/rightdes/right-des';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3} sx={{ borderRight: '1px solid' }}>
                <SideAlarm />
            </Grid>
            <Grid item xs={9}>
                <Description />
            </Grid>
        </Grid>
    );
}
Home.Layout = MainLayout;
