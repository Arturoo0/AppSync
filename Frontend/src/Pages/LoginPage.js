
import React from 'react';
import { TestComponent, LoginForm } from '../Components';
import Grid from '@material-ui/core/Grid';

const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={12}><LoginForm/></Grid>
        </Grid>
    );
}

export default LoginPage;