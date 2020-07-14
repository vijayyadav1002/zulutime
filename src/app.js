import React, { useState, useEffect } from 'react';
import ClockTimePicker from './components/clock-time-picker';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import yellow from '@material-ui/core/colors/yellow';
import './app.scss';

// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

const App = () => {
    const size = useWindowSize();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm" disableGutters>
                <Typography component="div" style={{ backgroundColor: yellow.A400, height: size.height }}>
                    <ClockTimePicker/>
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default App;