import {
    Admin,
    Resource,
} from 'react-admin';
import { createTheme } from '@mui/material';
import { useEffect } from 'react';
import { QueryClient } from '@tanstack/react-query';

import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { InfluenceresList } from './resources/influencers/influencers';
import { CustomProvider } from './utils/reducerContext';
import './index.scss';

const customDarkBackgroundTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#111427',
        },
    },
});

export const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 10 * 60 * 1000,
            },
        },
    });

    useEffect(() => {
        const isDemo = JSON.parse(localStorage.getItem('demo') || 'null')
        if (isDemo === null) {
            localStorage.setItem('demo', 'true')
        }
    }, [])

    return (
        <CustomProvider>
            {/* @ts-ignore */}
            <Admin queryClient={queryClient} theme={customDarkBackgroundTheme} layout={Layout} dataProvider={dataProvider}>
                <Resource
                    name='influencers'
                    list={InfluenceresList}
                />
            </Admin>
        </CustomProvider>
    )
};
