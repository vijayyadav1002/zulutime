import React from 'react';
import ClockTimePicker from './components/clock-time-picker';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import yellow from '@material-ui/core/colors/yellow';
import './app.scss';

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" disableGutters>
            <Typography component="div" style={{ backgroundColor: yellow.A400, height: '85vh' }}>
                <ClockTimePicker />
            </Typography>
        </Container>
    </React.Fragment>
);

export default App;