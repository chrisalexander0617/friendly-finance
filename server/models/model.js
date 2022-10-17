import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ApplicationSchema = new Schema({
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
    loanType:{
        type:String,
        required:true  
    },
    homePrice:{
        type:Number,
        required:true
    },
    downPayment:{
        type:Number,
        required:true
    },
    zipCode: {
        type:Number,
        required:true
    },
    FICOScore:{
        type:Number,
        required:true
    },
    loanPreference:{
        type:String,
        required:true
    }
})
