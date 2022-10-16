import React from 'react'
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

export const MortageCalculator = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const styles = {
        TextField: {
            width:'100%'
        },
        FullWidthButton: {
            width:'100%',
            padding:1
        }
    }
    
    return (
        <Paper elevation={5}>
            <Box p={5}>
                <Box p={5}>
                    <Typography sx={{textAlign:'center'}} variant="h3">Mortgage Calculator</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">What type of loan are you looking for?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChange}
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
                                    value={age}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChange}
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
                                    value={age}
                                    label="What is the most important when choosing a loan?"
                                    onChange={handleChange}
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
                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}