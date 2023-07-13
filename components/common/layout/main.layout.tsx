import { LayoutProps } from '@/models/common';
import { Stack } from '@mui/material';
import SideNav from '../nav/side-nav';
import { Box, Grid } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    //

    return (
        <Stack maxHeight="100vh" sx={{ height: '100vh' }}>
            <Stack
                sx={{
                    width: '100vw',
                    maxWidth: '100vw',
                }}
                direction="row"
            >
                <SideNav />

                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#fff',
                        maxWidth: '100%',
                        height: '100vh',
                        overflow: 'hidden',
                        // borderRadius: '20px 0px 0px 20px',
                        zIndex: 1,
                    }}
                >
                    {children}
                </Box>
            </Stack>
        </Stack>
    );
}