import React from 'react'
import { MortageCalculator } from '../components/MortgageCalculator'
import {Box, Container, Grid} from '@mui/material'

export const Mortgage = () => {
    const styles = {
        Container:{
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }
    return (
        <>
            <Container sx={styles.Container} maxwidth="sm">
                <MortageCalculator />
            </Container>
        </>
    )
}