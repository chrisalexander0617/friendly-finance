import React, {useState, useEffect} from 'react'
import {
    Grid, 
    Box, 
    Paper, 
    Card, 
    Typography, 
    TextField, 
    Button
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'




export const MortageCalculator = () => {
    const [loanType, setLoanType] = useState('');
    const [FICOScore, setFICOScore] = useState('');
    const [preference, setPreference] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(200)

    const handleChangeLoanType = (event) => 
        setLoanType(event.target.value);
    

    const handleChangeFICOScore = (event) => 
        setFICOScore(event.target.value);
    

    const handleChangePreference = (event) => 
        setPreference(event.target.value);
    
    
    console.log('axios', axios)
    const styles = {
        TextField: {
            width:'100%'
        },
        FullWidthButton: {
            width:'100%',
            padding:1
        }
    }

    const calculateMortgageRate = async ( loanAmount, interestRate, terms ) => {
        const options = {
            method: 'GET',
            url: 'https://mortgage-monthly-payment-calculator.p.rapidapi.com/revotek-finance/mortgage/monthly-payment',
            params: {loanAmount: loanAmount, interestRate:interestRate, terms:terms},
            headers: {
              'X-RapidAPI-Key': '0c569bc259msh607acdabc330e72p169f7cjsnfc26f1a401c5',
              'X-RapidAPI-Host': 'mortgage-monthly-payment-calculator.p.rapidapi.com'
            }
          };
        axios
        .request(options)
    }

    useEffect(()=> {
        try {
            const mortgage = calculateMortgageRate(400000, 0.05, 360)
            console.log('mortgage payment:', mortgage)
            setMonthlyPayment(mortgage.monthlyPayment)
            console.log('Success bitch')
        } catch (err) {
            console.log('err:', err)
        }
        
    })
    
    return (
        <Paper elevation={5}>
            <Box p={5}>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">What type of loan are you looking for?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={loanType}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangeLoanType}
                                >
                                    <MenuItem value={4}>Home Purchase</MenuItem>
                                    <MenuItem value={3}>Refinance</MenuItem>
                                    <MenuItem value={2}>Cash-out Refinance</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField type="number" sx={styles.TextField} label="Home Price" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField type="number" sx={styles.TextField} label="Down Payment" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField type="number" sx={styles.TextField} label="Property Zip Code" />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Choose a FICO score range</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={FICOScore}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangeFICOScore}
                                >
                                    <MenuItem value={4}>Excellent (740+)</MenuItem>
                                    <MenuItem value={3}>Very Good (700 - 739)</MenuItem>
                                    <MenuItem value={2}>Good (660 - 699)</MenuItem>
                                    <MenuItem value={1}>Fair (620 - 659)</MenuItem>
                                    <MenuItem value={0}>(619 and below)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">What is the most important when choosing a loan?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={preference}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangePreference}
                                >
                                    <MenuItem value={10}>Low Interest</MenuItem>
                                    <MenuItem value={20}>Steady Monthly Payment</MenuItem>
                                    <MenuItem value={30}>Short-term Ownership</MenuItem>
                                    <MenuItem value={30}>Low Monthly Payment</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" sx={styles.FullWidthButton}>Get my options</Button>
                        </Grid>
                        <Grid item xs={12}>
                            {monthlyPayment && <Typography>{monthlyPayment}</Typography>}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}