import { signInWithGooglePopup } from "../firebase.config"
import {Box, Button} from '@mui/material'

export const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
    }

    const styles = {
        Box:{
            height:'100vh',
            background:'#eee',
            position:'fixed',
            top:0,
            left:0,
            width:'100%',
            zIndex:10,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
    }

    return (
        <Box sx={styles.Box}>
            <Button variant="contained" onClick={logGoogleUser}>Sign In</Button>
            <Button variant="contained" onClick={logGoogleUser}>Close</Button>
        </Box>
    )
}