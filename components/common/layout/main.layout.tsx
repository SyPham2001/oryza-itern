import { LayoutProps } from '@/models/common';
import { Stack } from '@mui/material';
import SideNav from '../nav/side-nav';

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
                <Stack
                    sx={{
                        width: 'calc(100% - 80px)',
                        backgroundColor: '#fff',
                        maxWidth: '100%',
                        height: '100vh',
                        overflow: 'hidden',
                        borderRadius: '20px 0px 0px 20px',
                        zIndex: 1,
                        p: '15px',
                    }}
                >
                    {children}
                </Stack>
            </Stack>
        </Stack>
    );
}
