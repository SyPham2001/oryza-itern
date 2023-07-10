import { LoadingPage, MainLayout } from '@/components/common';
import { AppPropsWithLayout } from '@/models/common';
import store from '@/redux/store';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import { useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { getDesignTokens } from '@/ultis/palette_mode';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const Layout = Component.Layout ?? MainLayout;
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <LoadingPage />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}
