import React from 'react';
import { SignupForm } from '../Components';
import Grid from '@material-ui/core/Grid';

const SignupPage = () => {
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={12}><SignupForm/></Grid>
        </Grid>
    );
}

export default SignupPage;