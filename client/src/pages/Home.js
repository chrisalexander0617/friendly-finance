import React, {useState} from 'react'
import { MortageCalculator } from '../components/MortgageCalculator'
import {Box, Button, Container, Grid, Typography} from '@mui/material'
import {RegisterForm} from '../components/RegisterForm'

export const Home = () => {
    const styles = {
        Container:{
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'3em'
        }
    }

    return (
        <Box>
            <Container sx={styles.Container} maxWidth="xl">
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h2">Mortage Calculator</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Our free mortgage calculator helps you get a detailed 
                                    rate and payment estimate based on your needs and goals. 
                                    Tell us the property information and choose your preferences 
                                    get loan options and estimated monthly payments for your new home purchase or 
                                    refinance.
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Button href="/analytics" variant="contained" sx={styles.FullWidthButton}>View Analytics</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MortageCalculator />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}