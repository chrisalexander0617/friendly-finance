
import React, {useState} from 'react'
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
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [loanType, setLoanType] = useState('');
    const [homePrice, setHomePrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [FICOScore, setFICOScore] = useState();
    const [loanPreference, setLoanPreference] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    const [zipCode, setZipCode] = useState(0)
    const [error, setErrors] = useState('')

    const handleChangeFirstName = (event) => 
        setFirstName(event.target.value);

    const handleChangeEmail = (event) => 
        setEmail(event.target.value);

    const handleChangeLoanType = (event) => 
        setLoanType(event.target.value);

    const handleChangeHomePrice = (event) => 
        setHomePrice(event.target.value);

    const handleChangeDownPayment = (event) => 
        setDownPayment(event.target.value);

    const handleChangeFICOScore = (event) => 
        setFICOScore(event.target.value);

    const handleChangeZipCode = (event) => 
        setZipCode(event.target.value);

    const handleChangeLoanPreference = (event) => 
        setLoanPreference(event.target.value);
    

    const styles = {
        TextField: {
            width:'100%'
        },
        FullWidthButton: {
            width:'100%',
            padding:1
        }
    }

    const submitAppplication = () => {
        const query = {
            firstName:firstName, 
            email:email,
            loanType:loanType,
            homePrice:parseInt(homePrice),
            downPayment:parseInt(downPayment),
            zipCode:parseInt(zipCode),
            FICOScore:FICOScore,
            loanPreference:loanPreference
        }

        console.log('QUERY:', query)

        try {
            console.log('Submitting form')
            axios
                .post('http://localhost:8080/applications', query)
        } catch(err) {
            console.log('we gots a prahlem:', err)
        }
    }

    const calculateMortgageRate = async () => {
        const updatedLoanAmount = homePrice - downPayment
        const interestRateFromFICOScore = FICOScore * 0.01
        const options = {
            method: 'GET',
            url: 'https://mortgage-monthly-payment-calculator.p.rapidapi.com/revotek-finance/mortgage/monthly-payment',
            params: {loanAmount:updatedLoanAmount, interestRate:interestRateFromFICOScore, terms:360},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOSTY
              }
        }

        try {
            const mortgage = await axios.request(options)
            if(mortgage) 
                setMonthlyPayment(mortgage.data.monthlyPayment.toFixed(2))
            submitAppplication()

            
            
        } catch (err) { 
            console.log('Error:',err) 
        }
    }

    return (
        <Paper elevation={5}>
            <Box p={5}>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant='h1'>${monthlyPayment}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField onChange={handleChangeFirstName} value={firstName} type="email" sx={styles.TextField} label="Name" required/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={email} onChange={handleChangeEmail} type="text" sx={styles.TextField} label="Email" required/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">What type of loan are you looking for?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={loanType}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangeLoanType}
                                >
                                    <MenuItem value="Home Purchase">Home Purchase</MenuItem>
                                    <MenuItem value="Refinance">Refinance</MenuItem>
                                    <MenuItem value="Cash-out Refina">Cash-out Refinance</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField value={homePrice} onChange={handleChangeHomePrice} type="number" sx={styles.TextField} label="Home Price" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField value={downPayment} onChange={handleChangeDownPayment} type="number" sx={styles.TextField} label="Down Payment" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField value={zipCode} onChange={handleChangeZipCode} type="number" sx={styles.TextField} label="Property Zip Code" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Choose a FICO score range</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={FICOScore ? FICOScore : 5.1}
                                    defaultValue={5.1}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangeFICOScore}
                                >
                                    <MenuItem value={5.1}>Excellent (740+)</MenuItem>
                                    <MenuItem value={5.4}>Very Good (700 - 739)</MenuItem>
                                    <MenuItem value={5.8}>Good (660 - 699)</MenuItem>
                                    <MenuItem value={6.2}>Fair (620 - 659)</MenuItem>
                                    <MenuItem value={6.7}>(619 and below)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">What is the most important when choosing a loan?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={loanPreference}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChangeLoanPreference}
                                >
                                    <MenuItem value="Low Interest">Low Interest</MenuItem>
                                    <MenuItem value="Steady Monthly Payment">Steady Monthly Payment</MenuItem>
                                    <MenuItem value="Short-term Ownership">Short-term Ownership</MenuItem>
                                    <MenuItem value="Low Monthly Payment">Low Monthly Payment</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={calculateMortgageRate} variant="contained" sx={styles.FullWidthButton}>Get my options</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}