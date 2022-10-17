import React,{useEffect, useRef, useState} from 'react'
import {Box, Container,Grid, Typography, Button} from '@mui/material'
import axios from 'axios'
import { 
    PieChart, 
    Pie, 
    ResponsiveContainer 
} from 'recharts';


const FICOChart = () => {
    const [data, setData] = useState()
    const fetchedApplications = useRef(false)

    const fetchMortgageApplications = async () => {
        try {
            const results = await axios.get('http://localhost:8080/applications')
            const applicantsWithExcellentCredit = results.data.filter(application => application.FICOScore === 5.1)
            const applicantsWithGreatCredit = results.data.filter(application => application.FICOScore === 5.4)
            const applicantsWithGoodCredit = results.data.filter(application => application.FICOScore === 5.8)
            const applicantsWithFairCredit = results.data.filter(application => application.FICOScore === 6.2)
            const applicantsWithBelowFairCredit = results.data.filter(application => application.FICOScore === 6.7)

            const dataForChart = [
                { name: 'Excellent Credit', value:applicantsWithExcellentCredit.length},
                { name: 'Great Credit', value:applicantsWithGreatCredit.length },
                { name: 'Good Credit', value:applicantsWithGoodCredit.length },
                { name: 'Fair Credit', value:applicantsWithFairCredit.length},
                { name: 'Below Fair Credit', value:applicantsWithBelowFairCredit.length },
            ]
            setData(dataForChart)
        } catch (err) {}
    }

    useEffect(() => {
        if(fetchedApplications.current) return
        fetchedApplications.current = true
        fetchMortgageApplications()
    },[data]) 




    return (
        <>
            <Box sx={{height:600, width:'100%'}}>
                <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" data={data} fill="#8884d8" label />
                        </PieChart>
                </ResponsiveContainer>
            </Box>
        </>
    )
}

export const Analytics = () => {
    const styles = {
        Container:{
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'1em'
        }
    }


    return (
        <>
            <Container sx={styles.Container} maxwidth="sm">
                <Typography variant="h3">Credit Analytics</Typography>
                <Typography variant="body1">FICO Scores from recent applications</Typography>
                <Button href="/" variant="outlined" sx={styles.FullWidthButton}>Back to Form</Button>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FICOChart />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}