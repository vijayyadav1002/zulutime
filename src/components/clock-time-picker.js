import 'date-fns';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { getUTCTime } from './utctime';

const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: deepPurple.A100,
            },
        },
        MuiPickersBasePicker: {
            pickerView: {
                maxWidth: '100%'
            }
        }
    },
});

export default function MaterialUIPickers() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container style={{ top: '50%', position: 'relative', transform: 'translateY(-50%)' }}>
                    <Grid item xs={12}>
                    <KeyboardTimePicker
                        margin="normal"
                        label="Time picker"
                        ampm={false}
                        variant="static"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'Time picker',
                        }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div">
                            <Box bgcolor="secondary.main"
                                 color="secondary.contrastText" fontSize="h3.fontSize" p={2} textAlign="center">
                                { getUTCTime(selectedDate) } UTC
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
}
