import React from 'react'
import { MortageCalculator } from '../components/MortgageCalculator'
import {Box, Container, Grid, Typography} from '@mui/material'

export const Mortgage = () => {
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
        <>
            <Container sx={styles.Container} maxwidth="sm">
                <Typography variant="h2">Mortage Calculator</Typography>
                <Typography variant="h6">
                    Our free mortgage calculator helps you get a detailed 
                    rate and payment estimate based on your needs and goals. 
                    Tell us the property information and choose your preferences 
                    get loan options and estimated monthly payments for your new home purchase or 
                    refinance.
                    </Typography>
                <MortageCalculator />
            </Container>
        </>
    )
}