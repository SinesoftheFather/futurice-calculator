import { app } from './index';
import request from 'supertest';

describe('GET /calculate', () => {
  test("should return 200 & valid response", async () => {
    await request(app)
      .get("/calculate?query=[MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk=]")
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchObject({ error: false, result: -132.88888888888889 })
      })
  })
})
