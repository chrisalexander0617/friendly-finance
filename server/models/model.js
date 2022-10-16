import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    created_date:{
        type:Date,
        default:Date.now
    },
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true  
    },
    password:{
        type:String,
        required:true
    }
})

export const HotelSchema = new Schema({
    created_date:{
        type:Date,
        default:Date.now
    },
})