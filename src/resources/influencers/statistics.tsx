import { useListContext } from 'react-admin';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useMemo } from 'react';

const calculateStats = (influencers: any) => {
    const activeInfluencersCount = influencers.length;
    const totalVerifiedClaims = influencers.reduce((acc: any, influencer: any) => acc + influencer.verifiedClaimsCount, 0);
    const averageTrustScore = influencers.reduce((acc: any, influencer: any) => acc + (influencer.trustScore), 0) / influencers.length;

    return {
        activeInfluencersCount,
        totalVerifiedClaims,
        averageTrustScore: activeInfluencersCount !== 0 ? averageTrustScore.toFixed(1) : 0,
    };
};

export const StatsCard = () => {
    const { data } = useListContext();

    const resultData: any = useMemo(() => {
        if (data) {
            return calculateStats(data);
        }
    }, [data]);

    return (
        <Grid container spacing={3} className='container-info'>
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ backgroundColor: '#171e2f', borderRadius: '10px' }}>
                    <CardContent>
                        <Box display='flex' justifyContent='flex-start' alignItems='center' gap='10px' width='100%'>
                            <PeopleOutlineIcon fontSize='large' htmlColor='#00cc83' />
                            <div>
                                <Typography variant='h4'>{resultData?.activeInfluencersCount}</Typography>
                                <Typography variant='h6' style={{ opacity: 0.5 }}>
                                    Active Influencers
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
                            <CheckCircleOutlineIcon fontSize='large' htmlColor='#00cc83' />
                            <div>
                                <Typography variant='h4'>{resultData?.totalVerifiedClaims}</Typography>
                                <Typography variant='h6' style={{ opacity: 0.5 }}>
                                    Claims Verified
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
                            <BarChartIcon fontSize='large' htmlColor='#00cc83' />
                            <div>
                                <Typography variant='h4'>{resultData?.averageTrustScore}%</Typography>
                                <Typography variant='h6' style={{ opacity: 0.5 }}>
                                    Average Trust Score
                                </Typography>
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
