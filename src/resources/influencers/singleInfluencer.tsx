import { Avatar, Box, Card, CardContent, Chip, Grid, Link, Typography } from '@mui/material';
import { Loading, SimpleShowLayout, useRecordContext } from 'react-admin';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InventoryIcon from '@mui/icons-material/Inventory';
import InstagramIcon from '@mui/icons-material/Instagram';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const formatFollowersCount = (count: number) => {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M+';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K+';
    } else {
        return count.toString();
    }
}

export const SingleInfluencer = () => {
    const record = useRecordContext();
    return (
        record ?
            <SimpleShowLayout>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                }}>
                    <Avatar style={{ width: '100px', height: '100px' }} src={record?.image} />
                    <div>
                        <Typography variant='h3' fontWeight='bolder' gutterBottom>{record?.name} {record?.instagramHandle ? <Link href={`https://www.instagram.com/${record.instagramHandle}`} target='_blank' underline='none'><InstagramIcon /></Link> : null}</Typography>
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            marginBottom: '15px'
                        }}>
                            {record?.categories && record?.categories.length !== 0 && record.categories.map((el: string, index: number) => {
                                return <Chip key={index} label={el} />
                            })}
                        </div>
                        <Typography variant='h5'>{record?.about}</Typography>
                    </div>
                </div>
                <Grid container spacing={3} className='container-info'>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={{ backgroundColor: '#171e2f', borderRadius: '10px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='flex-start' alignItems='center' gap='10px' width='100%'>
                                    <div style={{ width: '100%' }}>
                                        <Typography style={{
                                            marginBottom: '25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }} variant='h6'>Trust Score <TrendingUpIcon htmlColor='#00e79b' /></Typography>
                                        <Typography color='#00e79b' variant='h4' gutterBottom>
                                            {record?.trustScore}%
                                        </Typography>
                                        <Typography variant='h6' style={{ opacity: 0.5 }} gutterBottom>
                                            Based on {record?.verifiedClaimsCount} verified claims
                                        </Typography>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={{ backgroundColor: '#171e2f', borderRadius: '10px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='flex-start' alignItems='center' gap='10px' width='100%'>
                                    <div style={{ width: '100%' }}>
                                        <Typography style={{
                                            marginBottom: '25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }} variant='h6'>Yearly Revenue <AttachMoneyIcon htmlColor='#00e79b' /></Typography>
                                        <Typography color='#00e79b' variant='h4' gutterBottom>
                                            {record?.yearlyRevenue}
                                        </Typography>
                                        <Typography variant='h6' style={{ opacity: 0.5 }} gutterBottom>
                                            Estimated earnings
                                        </Typography>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={{ backgroundColor: '#171e2f', borderRadius: '10px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='flex-start' alignItems='center' gap='10px' width='100%'>
                                    <div style={{ width: '100%' }}>
                                        <Typography style={{
                                            marginBottom: '25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }} variant='h6'>Products <InventoryIcon htmlColor='#00e79b' /></Typography>
                                        <Typography color='#00e79b' variant='h4' gutterBottom>
                                            {record?.recommendedProductsCount}
                                        </Typography>
                                        <Typography variant='h6' style={{ opacity: 0.5 }} gutterBottom>
                                            Recommended products
                                        </Typography>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card style={{ backgroundColor: '#171e2f', borderRadius: '10px' }}>
                            <CardContent>
                                <Box display='flex' justifyContent='flex-start' alignItems='center' gap='10px' width='100%'>
                                    <div style={{ width: '100%' }}>
                                        <Typography style={{
                                            marginBottom: '25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }} variant='h6'>Followers <PeopleOutlineIcon htmlColor='#00e79b' /></Typography>
                                        <Typography color='#00e79b' variant='h4' gutterBottom>
                                            {record?.followers ? formatFollowersCount(record?.followers) : ''}
                                        </Typography>
                                        <Typography variant='h6' style={{ opacity: 0.5 }} gutterBottom>
                                            Total following
                                        </Typography>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div>
                    {record?.verifiedClaims && record.verifiedClaims.length !== 0 ?
                        record.verifiedClaims.map((el: any, index: number) => {
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '25px',
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Chip style={{ backgroundColor: el.verificationStatus === 'Verified' ? '#00413b' : '#9d5e00', color: '#00db93' }} label='Verified' />
                                            <Typography variant='h6' style={{ opacity: '0.5', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <CalendarTodayIcon fontSize='small' /> {el.verificationDate}
                                            </Typography>
                                        </div>
                                        <Typography variant='h5' gutterBottom style={{ fontWeight: 'bolder' }}>
                                            {el.claim}
                                        </Typography>
                                        {el.evidence && el.evidence.length !== 0 ?
                                            el.evidence.map((item: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; journal: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; link: string | undefined; }, index: number) => {
                                                return (
                                                    <div key={index}>
                                                        <Typography variant='h6' gutterBottom style={{ fontWeight: 'bolder' }}>
                                                            Title - {item.title}
                                                        </Typography>
                                                        <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bolder' }}>
                                                            Journal - {item.journal}
                                                        </Typography>
                                                        <Link href={item.link} target='_blank' underline='none' style={{ color: '#00db93', display: 'flex', gap: '10px', alignItems: 'center' }}>View Source <OpenInNewIcon fontSize='small' /></Link>
                                                    </div>
                                                )
                                            })
                                            : null}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end',
                                    }}>
                                        <Typography variant='h5' color={el.trustScore >= 90 ? 'lightgreen' : 'yellow'} gutterBottom style={{ fontWeight: 'bolder' }}>
                                            {el.trustScore}%
                                        </Typography>
                                        <Typography variant='h6' gutterBottom style={{ opacity: '0.5' }}>
                                            Trust Score
                                        </Typography>
                                    </div>
                                </div>
                            )
                        })
                        : 'Data not available'}
                </div>
            </SimpleShowLayout> : <Loading />
    )
}
