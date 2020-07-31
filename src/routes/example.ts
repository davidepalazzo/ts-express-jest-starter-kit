import express from 'express'
import { ROUTE_PATHS } from '.'

const router = express.Router()

router.get(ROUTE_PATHS.EXAMPLE, (req, res) => {
  res.send({
    data: 'Example data',
  })
})

export { router as exampleRouter }
