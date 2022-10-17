import React,{useEffect, useRef, useState} from 'react'
import {Box, Container,Grid, Typography} from '@mui/material'
import axios from 'axios'
import { 
    PieChart, 
    Pie, 
    Cell, 
    ResponsiveContainer 
} from 'recharts';


const FICOChart = () => {
    const fetchedApplications = useRef(false)
    const [data, setData] = useState([
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ]); 

    const fetchMortgageApplications = async () => {
        try {
            const results = await axios.get('http://localhost:8080/applications')
            console.log('here are the results', results.data)
            // setData(results.data)
        } catch (err) {}
    }


    useEffect(() => {
        console.log('analytics')
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
                <Typography variant="h3">Mortgage Analytics</Typography>
                <Typography variant="body1">Learn about your customers by reviewing their data</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FICOChart />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}