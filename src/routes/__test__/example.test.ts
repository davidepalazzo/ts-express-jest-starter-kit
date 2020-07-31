import request from 'supertest'
import { app } from '../../app'
import { ROUTE_PATHS } from '..'

describe('Example route', () => {
  it('should have status code 200', async () => {
    await request(app).get(ROUTE_PATHS.EXAMPLE).expect(200)
  })
})
