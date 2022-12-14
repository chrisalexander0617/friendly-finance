import React, {useState, useEffect, useRef} from 'react'
import {Box, Grid, Typography, TextField, Button} from '@mui/material'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, sendSignInLinkToEmail} from "firebase/auth"
import {auth} from '../../src/firebase.config'

export const RegisterForm = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({})
    const mounted = useRef(false)

    const styles = {
        TextField: {
            width:'100%'
        }
    }

    const credentials = {
        email:email,
        password:password
    }

    const handleLogIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                credentials.email, 
                credentials.password
            )
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogOut = async () => await signOut(auth)

    const handleSubmit = async () => {
        try {
            await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        } catch (err) {
            console.log(err.message)
            if(err.message === 'auth/email-already-in-use'){
                // do something
            }
        }
    }  

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    },[])
 
    return (
        <Box>   
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h1">Register</Typography>
                    {user && user.email}!
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={styles.TextField} value={email} onChange={e => setEmail(e.target.value)} label="email" type="email"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField sx={styles.TextField} value={password} onChange={e => setPassword(e.target.value)} label="password" type="password" />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button variant="contained" onClick={handleSubmit}>Register/Login</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleLogIn}>Log In</Button>
                        </Grid>
                    </Grid>
                   
                </Grid>
            </Grid>
        </Box> 
    )
}