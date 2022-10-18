import React,{useEffect, useRef, useState} from 'react'
import {Box, Container,Grid, Typography, Button} from '@mui/material'
import {ApplicationTable} from '../components/ApplicationTable'
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
    const customLabel =({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        value,
        index
      }) => {
        console.log("handling label?");
        const RADIAN = Math.PI / 180;
        // eslint-disable-next-line
        const radius = 25 + innerRadius + (outerRadius - innerRadius);
        // eslint-disable-next-line
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        // eslint-disable-next-line
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {data[index].name} ({value})
          </text>
        );
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
                        <Pie dataKey="value" data={data} fill="#8884d8" label={customLabel} />
                    </PieChart>
                </ResponsiveContainer>
            </Box>
        </>
    )
}

export const Analytics = () => {
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
        <>
            <Container sx={styles.Container} maxwidth="sm">
                <Typography variant="h3">Credit Analytics</Typography>
                <Typography variant="body1">FICO Scores from recent applications</Typography>
                <Button href="/" variant="outlined" sx={styles.FullWidthButton}>Back to Form</Button>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FICOChart />
                        <ApplicationTable />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}