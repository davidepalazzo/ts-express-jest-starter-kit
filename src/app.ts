import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'

import { exampleRouter } from './routes/example'
import { ascyncExampleRouter } from './routes/async-example'
import { ROUTE_PATHS } from './routes'

const app = express()

app.use(json())

app.use(exampleRouter)
app.use(ascyncExampleRouter)

app.all(ROUTE_PATHS.ALL, async (req, res) => {
  res.status(404).send('<h1>404 - Page not found</h1>')
})

export { app }
