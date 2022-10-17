import React from 'react'
import {Box, Container, Grid, Typography} from '@mui/material'

export const Analytics = () => {
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
                <Typography variant="h3">Analytics</Typography>
            </Container>
        </>
    )
}