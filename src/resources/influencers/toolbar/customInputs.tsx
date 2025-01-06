import { Button, ButtonBase, Typography } from '@mui/material';
import {
    Grid,
    ListItem,
    ListItemText,
} from '@mui/material';
import { useController } from 'react-hook-form';

const journals: Array<string> = [
    'PubMed Central',
    'Nature',
    'Science',
    'Cell',
    'The Lancet',
    'New England Journal of Medicine',
    'JAMA Network',
];

export const RangeInput = () => {
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

export const JournalsInput = () => {
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
