import { Response, Request, NextFunction } from 'express'

export const customMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  req.body.extraData = 'Data added by the middleware'

  next()
}
