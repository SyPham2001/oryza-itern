import { Stack } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/index';

export interface ILoadingPageProps {}

export function LoadingPage(props: ILoadingPageProps) {
    const isLoading = useAppSelector((state) => state.common.isLoadingGlobal);

    return (
        <Stack
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: '#00000020',
                width: 'calc(100vw - 60px)',
                height: '100vh',
                zIndex: 1000,
                display: isLoading ? 'flex' : 'none',
            }}
        >
            <Image
                src={'/images/logo/logo-v2.png'}
                alt="loading"
                width={35}
                height={35}
                style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    WebkitAnimation: 'rotating 1.5s linear infinite',
                    MozAnimation: 'rotating 1.5s linear infinite',
                    animation: 'rotating 1.5s linear infinite',
                }}
            />
        </Stack>
    );
}
