import mongoose from 'mongoose'
import {UserSchema, HotelSchema} from '../models/model' 

//Creating a vairable from the mongoose schema, will 
//automatically create a new collection under the name
// Example: User -> Users (collection in Atlas)
const User = mongoose.model('User', UserSchema)


export const homeRoute = (req, res) => {
    res.send('Home')
}

export const addNewUser = (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err) => {
        if(err) res.send(err)
        res.json(User)
    })
}

export const getUsers = (req, res) => {
   User.find({}, (err, User) =>{
        if(err) res.send(err)
        res.json(User)
    })
}

export const getUserById = (req, res) => {
    User.findById(req.params.id, (err, User) =>{
        if(err) res.send(err)
        res.json(User)
    })
}

export const updateUserById = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, 
        req.body, 
        {new:true}, 
        (err, User) => {
        if(err) res.send(500)
        res.send(200)
    })
}

export const deleteUserById = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, User) => {
        if(err) res.send(500)
        res.send(200)
    })
}