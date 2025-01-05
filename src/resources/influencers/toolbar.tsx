import { Button, ButtonBase, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useState } from 'react';
import {
    Box,
    Grid,
    ListItem,
    ListItemText,
} from '@mui/material';
import { useController } from 'react-hook-form';
import { BooleanInput, SimpleForm, TextInput, useListContext } from 'react-admin';

import { DialogProps } from '../../types';

const journals = [
    'PubMed Central',
    'Nature',
    'Science',
    'Cell',
    'The Lancet',
    'New England Journal of Medicine',
    'JAMA Network',
];

const RangeInput = () => {
    const rangeField = useController({ name: 'timeRange', defaultValue: '' });

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='subtitle1'>Time Range</Typography>
            <Grid container paddingLeft='0' rowGap={0} spacing={2}>
                <Grid item xs={6}>
                    <Button fullWidth sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 1,
                        color: 'white',
                        borderRadius: 1,
                        backgroundColor: rangeField.field.value === 'lastWeek' ? '#0d3539' : 'background.paper',
                    }} variant='contained' onClick={() => rangeField.field.onChange('lastWeek')}>
                        Last Week
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 1,
                        color: 'white',
                        borderRadius: 1,
                        backgroundColor: rangeField.field.value === 'lastMonth' ? '#0d3539' : 'background.paper',
                    }} variant='contained' onClick={() => rangeField.field.onChange('lastMonth')}>
                        Last Month
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 1,
                        color: 'white',
                        borderRadius: 1,
                        backgroundColor: rangeField.field.value === 'lastYear' ? '#0d3539' : 'background.paper',
                    }} variant='contained' onClick={() => rangeField.field.onChange('lastYear')}>
                        Last Year
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 1,
                        color: 'white',
                        borderRadius: 1,
                        backgroundColor: rangeField.field.value === 'allTime' ? '#0d3539' : 'background.paper',
                    }} variant='contained' onClick={() => rangeField.field.onChange('allTime')}>
                        All Time
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

const JournalsInput = () => {
    const journalsField = useController({ name: 'journals', defaultValue: [] });

    const handleSelectAll = () => {
        journalsField.field.onChange(journals)
    };

    const handleDeselectAll = () => {
        journalsField.field.onChange([])
    };

    const handleJournalToggle = (journal: string) => {
        const currentJournals = journalsField.field.value;
        const updatedJournals = currentJournals.includes(journal)
            ? currentJournals.filter((item: string) => item !== journal)
            : [...currentJournals, journal];
        journalsField.field.onChange(updatedJournals);
    };

    return (
        <Grid item xs={12}>
            <Typography variant='subtitle1'>Scientific Journals</Typography>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '10px'
            }}>
                <Button onClick={handleSelectAll} variant='text'>
                    Select All
                </Button>
                <Button onClick={handleDeselectAll} variant='text'>
                    Deselect All
                </Button>
            </div>
            <Grid container spacing={2}>
                {journals.map((journal, index) => (
                    <Grid item key={index} xs={6}>
                        <ButtonBase
                            onClick={() => handleJournalToggle(journal)}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: 1,
                                borderRadius: 1,
                                backgroundColor: journalsField.field.value.includes(journal) ? '#0d3539' : 'background.paper',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={journal} />
                            </ListItem>
                        </ButtonBase>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

const ResearchDialog = (props: DialogProps) => {
    const { onClose, open } = props;
    const { setFilters } = useListContext();

    const onSubmit = async (data: any) => {
        setFilters(data)
        onClose();
    };

    return (
        <Dialog maxWidth='md' onClose={onClose} open={open}>
            <DialogTitle textAlign='center' justifyContent='center'>Research Configuration</DialogTitle>
            <SimpleForm sanitizeEmptyValues onSubmit={onSubmit} toolbar={false}>
                <DialogContent className='modal-content'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                        <div className='options' style={{ backgroundColor: '#0d3539', border: '1px solid #00bd7c' }}>
                            <Typography textAlign='center' variant='h5'>Specific Influencer</Typography>
                            <Typography textAlign='center' style={{ opacity: '0.5' }} variant='subtitle1'>Research a known influencer by name</Typography>
                        </div>
                        <div className='options'>
                            <Typography textAlign='center' variant='h5'>Discover New</Typography>
                            <Typography textAlign='center' style={{ opacity: '0.5' }} variant='subtitle1'>Find and analize new health influencers</Typography>
                        </div>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Grid container spacing={3}>
                            <RangeInput />
                            <Grid item xs={12} sm={6}>
                                <TextInput type='number' fullWidth source='productsPerInfluencer' label='Products to Find Per Influencer' />
                                <Grid item xs={12}>
                                    <Grid item xs={12}>
                                        <BooleanInput defaultValue={null} source='includeRevenueAnalysis' label='Include Revenue Analysis' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <BooleanInput defaultValue={null} source='verifyWithScientificJournals' label='Verify with Scientific Journals' />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextInput fullWidth source='influencerName' placeholder='Enter influencer name' />
                                <TextInput type='number' fullWidth source='claimsToAnalyze' placeholder='Claims to Analyze Per Influencer' />
                            </Grid>
                            <JournalsInput />
                            <Grid item xs={12}>
                                <TextInput minRows={3} fullWidth source='notes' label='Notes for Research Assistant' placeholder='Add any specific instructions or focus areas' multiline />
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant='contained' type='submit'>Start Research</Button>
                        </div>
                    </Box>
                </DialogContent>
            </SimpleForm>
        </Dialog>
    );
}

export const Toolbar = () => {
    const [open, setOpen] = useState(false);
    const { setFilters } = useListContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '15px'
            }}>
                <Typography variant='h3' style={{ fontWeight: 'bolder' }}>
                    Influencer Trust Leaderboard
                </Typography>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button onClick={() => setFilters({})} variant='contained'>Clear Research</Button>
                    <Button onClick={handleClickOpen} variant='contained'>Start New Research</Button>
                </div>
            </div>
            <Typography variant='h6' gutterBottom style={{ opacity: '0.5' }}>
                Real-time rankings of health influencers based on scientific accuracy, credibility, and transparency. Updated daily using AI-powered analysis.
            </Typography>
            <ResearchDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    );
};
