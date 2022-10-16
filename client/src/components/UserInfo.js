import React, {useState} from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid
} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const UserInfo = ({
        _id,
        firstname, 
        lastname, 
        email,
        phone,
        address,
        handleUpdate
    }) => {
    const navigate = useNavigate()

    const deleteUser = () => {
        axios.delete(`http://localhost:8080/user/${_id}`)
        .then(res =>
            navigate('/add-user')
        )
    }

    // const updateuser = () => {
        
    // }

    return (
        <Box>
            <Typography variant='h6'>
                {email}
            </Typography>
            <Button onClick={deleteUser} variant='contained'>Delete</Button>
            <Button onClick={handleUpdate} variant='contained'>Update</Button>
            <Button href='/add-user' variant='contained'>Back</Button>
        </Box>
    )
}