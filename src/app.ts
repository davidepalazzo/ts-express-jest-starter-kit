import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'

import { exampleRouter } from './routes/example'

const app = express()
app.use(json())

app.use(exampleRouter)

export { app }
