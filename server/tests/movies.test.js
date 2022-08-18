/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server');
const db = require('../database/models/index');

describe('/movies', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  describe('Get /movies/:page&:sortBy', () => {
    it('should succeed', async () => {
      const res = await supertest(app).get('/movies/1&popularity.desc');
      expect(res.status).toBe(200);
    });
  });

  describe('POST /movies ', () => {
    it('should create movie', async () => {
      const res = await supertest(app)
        .post('/movies')
        .set({
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjA4MTYxNzl9.iuWD9fHtFhGdv0am-25KsBFrWxzsWBN8X_Kxb18mehg',
        })
        .send({
          id: 1,
          overview: 'dummy movie',
          popularity: 1370.175,
          poster_path: 'dummy Poster',
          release_date: '2022-07-29',
          title: 'Purple Hearts',
          vote_average: 8.6,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      expect(res.status).toBe(200);
    });
  });

  describe('POST /movies ', () => {
    it('should fail access denied', async () => {
      const res = await supertest(app).post('/movies').send({
        id: 1,
        overview: 'dummy movie',
        popularity: 1370.175,
        poster_path: 'dummy Poster',
        release_date: '2022-07-29',
        title: 'Purple Hearts',
        vote_average: 8.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      expect(res.status).toBe(401);
    });
  });
});
