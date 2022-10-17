import mongoose from 'mongoose'
import {ApplicationSchema} from '../models/model' 

//Creating a vairable from the mongoose schema, will 
//automatically create a new collection under the name
// Example: User -> Users (collection in Atlas)
const Application = mongoose.model('Application', ApplicationSchema)


export const homeRoute = (req, res) => {
    res.send('Home')
}

export const addNewApplication = (req, res) => {
    let newApplication = new Application(req.body)
    newApplication.save((err) => {
        if(err) res.send(err)
        res.json(Application)
    })
}

export const getApplications = (req, res) => {
    Application.find({}, (err, Application) =>{
         if(err) res.send(err)
         res.json(Application)
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