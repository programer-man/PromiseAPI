import express from 'express'
const app = express()

import userRouter from './router/user_router.js'
app.use('/api', userRouter)


app.listen(80, ()=>{
    console.log('The server running at http://127.0.0.1')
})