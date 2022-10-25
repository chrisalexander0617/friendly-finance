import React,{useEffect, useRef, useState} from 'react'
import {Box, Container, Grid, TextField, Typography, Button} from '@mui/material'
import {ApplicationTable} from '../components/ApplicationTable'
import {FICOChart} from '../components/FICOChart'
import axios from 'axios'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, sendSignInLinkToEmail} from "firebase/auth"
import {auth} from '../firebase.config'

export const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([])
    const fetchedApplications = useRef(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState(null)

    const styles = {
        Container:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            gap:'1em'
        },
        SignInOverlay:{
            position:'fixed',
            top:0,
            left:0,
            width:'100vw',
            height:'100vh',
            zIndex:10,
            backgroundColor:'white',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
        },
        TextField: {
            width:'100%'
        }
    }

    const fetchMortgageApplications = async () => {
        try {
            const results = await axios.get('http://localhost:8080/applications')
            console.log('here are the results', results)
            setAnalyticsData(results.data)
        } catch (err) {}
    }

    const credentials = {
        email:email,
        password:password
    }

    const handleSubmit = async () => {
        try {
            await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        } catch (err) {
            console.log(err.message)
            if(err.message.includes('auth/email-already-in-use')){
                console.log(err.message)
                try {
                    await signInWithEmailAndPassword(
                        auth, 
                        credentials.email, 
                        credentials.password
                    )
                } catch(err) { console.log(err)}
            }
        }
    }  

    const handleLogOut = async () => await signOut(auth)

    useEffect(() => {
        if(fetchedApplications.current) return
        fetchedApplications.current = true
        fetchMortgageApplications()
        return () => fetchedApplications.current = false
    },[])

 

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    },[])

    return (
        <Box>
            {!user ? (
            <Box sx={styles.SignInOverlay}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h3">Register or login to view</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                sx={styles.TextField} 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                label="email" 
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                sx={styles.TextField} 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                label="password" 
                                type="password" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleSubmit} variant="contained">Register/Login</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            ) : (
            <Container sx={styles.Container} maxWidth="xxl">
                <Typography variant="h3">Credit Analytics</Typography>
                <Typography variant="body1">FICO Scores from recent applications</Typography>
                <Button href="/" variant="outlined" sx={styles.FullWidthButton}>Back to Form</Button>
                <Button onClick={handleLogOut} variant="outlined" sx={styles.FullWidthButton}>Log Out</Button>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{height:600, width:'100%'}}>
                            <FICOChart data={analyticsData} />
                        </Box>
                        <ApplicationTable data={analyticsData} />
                    </Grid>
                </Grid>
            </Container>
            )}
        </Box>
    )
}