import React,{useEffect, useRef, useState} from 'react'
import {Box, Container,Grid, Typography, Button} from '@mui/material'
import {ApplicationTable} from '../components/ApplicationTable'
import {FICOChart} from '../components/FICOChart'
import axios from 'axios'

export const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([])
    const fetchedApplications = useRef(false)

    const fetchMortgageApplications = async () => {
        try {
            const results = await axios.get('http://localhost:8080/applications')
            console.log('here are the results', results)
            setAnalyticsData(results.data)
        } catch (err) {}
    }

    useEffect(() => {
        if(fetchedApplications.current) return
        fetchedApplications.current = true
        fetchMortgageApplications()
        return () => fetchedApplications.current = false
    },[])

    const styles = {
        Container:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'1em'
        }
    }

    return (
        <Container sx={styles.Container} maxWidth="xxl">
            <Typography variant="h3">Credit Analytics</Typography>
            <Typography variant="body1">FICO Scores from recent applications</Typography>
            <Button href="/" variant="outlined" sx={styles.FullWidthButton}>Back to Form</Button>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={{height:600, width:'100%'}}>
                        <FICOChart data={analyticsData} />
                    </Box>
                    <ApplicationTable data={analyticsData} />
                </Grid>
            </Grid>
        </Container>
    )
}