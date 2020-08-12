import express, { Request, Response } from 'express'

import { ROUTE_PATHS } from '.'

const router = express.Router()

router.get(ROUTE_PATHS.ASYNC_EXAMPLE, async (req: Request, res: Response) => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve('Async example route'), 1000)
  )
  res.send({
    data,
  })
})

export { router as ascyncExampleRouter }
