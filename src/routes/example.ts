import express, { Request, Response } from 'express'

import { ROUTE_PATHS } from '.'
import { customMiddleware } from '../middlewares'

const router = express.Router()

router.get(
  ROUTE_PATHS.EXAMPLE,
  customMiddleware,
  (req: Request, res: Response) => {
    res.send({
      data: 'Example route',
    })
  }
)

export { router as exampleRouter }
