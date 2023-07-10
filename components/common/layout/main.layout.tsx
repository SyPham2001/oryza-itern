import { LayoutProps } from '@/models/common';
import { Stack } from '@mui/material';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    // get user

    return (
        <Stack maxHeight="100vh" sx={{ height: '100vh' }}>
            {/* <AuthUser> */}
            <Stack
                sx={{
                    width: '100vw',
                    maxWidth: '100vw',
                }}
                direction="row"
            >
                {/* <NavBar /> */}
                <Stack
                    sx={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '100%',
                        height: '100vh',
                        zIndex: 1,
                    }}
                >
                    {children}
                </Stack>
            </Stack>
            {/* </AuthUser> */}
        </Stack>
    );
}
