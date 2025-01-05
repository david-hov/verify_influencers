import {
    Admin,
    Resource,
} from 'react-admin';
import { createTheme } from '@mui/material';

import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { InfluenceresList } from './resources/influencers/influencers';
import { CustomProvider } from './utils/reducerContext';
import './index.scss';
import { useEffect } from 'react';

const customDarkBackgroundTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#111427',
        },
    },
});

export const App = () => {
    useEffect(() => {
        const isDemo = JSON.parse(localStorage.getItem('demo') || 'null')
        if (isDemo === null) {
            localStorage.setItem('demo', 'true')
        }
    }, [])

    return (
        <CustomProvider>
            {/* @ts-ignore */}
            <Admin theme={customDarkBackgroundTheme} layout={Layout} dataProvider={dataProvider}>
                <Resource
                    name='influencers'
                    list={InfluenceresList}
                />
            </Admin>
        </CustomProvider>
    )
};
