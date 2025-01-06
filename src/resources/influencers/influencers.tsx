import { useMemo } from 'react';
import { Datagrid, TextField, NumberField, FunctionField, FilterList, useListContext, ListContextProvider, useListController, Loading, Form, BooleanInput } from 'react-admin';
import { Avatar, Chip } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { StatsCard } from './statistics';
import { SingleInfluencer } from './singleInfluencer';
import { useCustomContext } from '../../utils/reducerContext';
import { Toolbar } from './toolbar/toolbar';
import ArmeniaVideo from '../../assets/Armenia.mp4';

const PostFilters = () => {
    const { dispatch, state } = useCustomContext();
    const { data } = useListContext();

    const categories = useMemo(() => {
        return [... new Set(data?.map((el) => el.mainCategory))];
    }, [data]);

    return (
        categories && categories.length !== 0 ?
            <div className='RaList-actions' style={{ width: '100%' }}>
                <FilterList className='filter-list' label='' icon={undefined}>
                    <Chip className={state.filter === 'All' ? 'Mui-selected' : ''} onClick={() => dispatch({ type: 'SET_FILTER', value: 'All' })} style={{ width: 'fit-content' }} label='All' />
                    {categories.map((el, index) => <Chip className={state.filter === el ? 'Mui-selected' : ''} onClick={() => dispatch({ type: 'SET_FILTER', value: el })} key={index} style={{ width: 'fit-content' }} label={el} />)}
                </FilterList>
            </div> : null
    )
};

const MainList = () => {
    const { state } = useCustomContext();
    const { data } = useListContext();

    const sortedData = useMemo(() => {
        if (!data) return [];
        const filteredData = data.filter((el) => {
            return state.filter === 'All' ? el : el.mainCategory === state.filter;
        });


        return filteredData;
    }, [data, state.filter]);

    return (
        <Datagrid data={sortedData} sx={{
            borderRadius: '4px',
            border: '1px solid #49536c'
        }} bulkActionButtons={false} expandSingle rowClick='expand' expand={<SingleInfluencer />}>
            <TextField source='rank' sortable={false} label='RANK' />
            <FunctionField
                label='INFLUENCER'
                render={record => {
                    return (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <Avatar />
                            <p>{record.name}</p>
                        </div>
                    )
                }}
            />
            <TextField source='mainCategory' sortable={false} label='CATEGORY' />
            <FunctionField
                label='TRUST SCORE'
                render={record => {
                    return (
                        <p style={{ color: record.trustScore >= 9 ? 'lightgreen' : 'yellow' }}>{record.trustScore ? `${record.trustScore}%` : '-'}</p>
                    )
                }}
            />
            <FunctionField
                label='TREND'
                render={record => {
                    return record.trend === 'Positive' ? <TrendingUpIcon htmlColor='lightgreen' /> : <TrendingDownIcon htmlColor='red' />
                }}
            />
            <NumberField sortable={false} source='followers' label='FOLLOWERS' />
            <NumberField sortable={false} source='verifiedClaimsCount' label='VERIFIED CLAIMS' />
        </Datagrid>
    )
}

export const InfluenceresList = () => {
    const listContext = useListController();

    if (listContext.isLoading || listContext.isFetching) {
        return <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <video width='450' autoPlay={true} controls muted>
                <source src={ArmeniaVideo} type="video/mp4" />
            </video>
            <p style={{ textAlign: 'center' }}>Introduction of my country 😊🇦🇲 (during data fetching)</p>
            <Loading />
        </div>
    }

    return (
        <ListContextProvider value={listContext}>
            <Form>
                <BooleanInput defaultValue={!JSON.parse(localStorage.getItem('demo') || 'false')} onChange={(e) => localStorage.setItem('demo', `${!e.target.checked}`)} label='Use Real Data from openAI' source='isDemo' />
            </Form>
            <Toolbar />
            <StatsCard />
            <PostFilters />
            <MainList />
        </ListContextProvider>
    )
};
