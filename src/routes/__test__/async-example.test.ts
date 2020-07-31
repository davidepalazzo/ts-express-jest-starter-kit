import request from 'supertest'
import { app } from '../../app'
import { ROUTE_PATHS } from '..'

describe('Async example route', () => {
  it('should have status code 200', async () => {
    const data = await request(app).get(ROUTE_PATHS.ASYNC_EXAMPLE).expect(200)

    expect(data).toBeTruthy()
  })
})
