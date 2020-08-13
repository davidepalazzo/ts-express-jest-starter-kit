import { getMockReq, getMockRes } from '@jest-mock/express'

import { customMiddleware } from '../customMiddleware'

const req = getMockReq()
const { res, next, clearMockRes } = getMockRes()

describe('Extra data custom middleware', () => {
  beforeEach(() => {
    clearMockRes()
  })

  it('sets the extra data key on the body object', () => {
    customMiddleware(req, res, next)

    expect(req.body).toEqual({ extraData: 'Data added by the middleware' })
  })
})
