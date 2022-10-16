import * as dotenv from 'dotenv'
dotenv.config({path:'../.env'})
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyparser from 'body-parser'
import routes from './routes/routes'

const app = express()
const PORT = process.env.PORT || 8080
const uri = process.env.MONGO_URI

mongoose
    .Promise = global.Promise
mongoose
    .connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log('successfully connected to mongodb'))
    .catch(error => handleError(error))

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

routes(app)

app.listen(PORT,() => 
    console.log('SERVER STARTED')
)