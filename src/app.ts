import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'

import { exampleRouter } from './routes/example'
import { ascyncExampleRouter } from './routes/async-example'

const app = express()

app.use(json())

app.use(exampleRouter)
app.use(ascyncExampleRouter)

export { app }
