const request = require('supertest');
const mongoose = require('mongoose');
const connectDB = require('../config/db.js');
let server = 'http://localhost:3000';
const app = require('../server.js');
/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  //   beforeAll(async () => {
  //     await connectDB();
  //   });

  beforeAll(async () => {
    const port = 3001;
    server = app.listen(port);
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await server.close();
    // await mongoose.connection.close();
  });

  describe('/api', () => {
    // describe('POST', () => {
    //   // Note that we return the evaluation of `request` here! It evaluates to
    //   // a promise, so Jest knows not to say this test passes until that
    //   // promise resolves. See https://jestjs.io/docs/en/asynchronous

    //   const testLibrary = { charterNumber: 1 };

    //   it('responds with 200 status and /application/json/ content type', () => {
    //     return request(server)
    //       .post('/api/library/create')
    //       .send(testLibrary)
    //       .expect('Content-Type', /application\/json/)
    //       .expect(200);
    //   });
    // });

    describe('PATCH', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous

      const testBook = {
        title: 'testBookfortest',
        author: 'tester',
        genre: 'testing',
      };

      it('responds with 200 status and /application/json/ content type', () => {
        return request(server)
          .patch(`/api/library/${1}`)
          .send(testBook)
          .expect('Content-Type', /application\/json/)
          .expect(201);
      });
    });
  });

  //   describe('/markets', () => {
  //     describe('GET', () => {
  //       xit('responds with 200 status and application/json content type', () => {});

  //       // For this test, you'll need to inspect the body of the response and
  //       // ensure it contains the markets list. Check the markets.dev.json file
  //       // in the dev database to get an idea of what shape you're expecting.
  //       xit('markets from "DB" json are in body of response', () => {});
  //     });

  //     describe('PUT', () => {
  //       xit('responds with 200 status and application/json content type', () => {});

  //       xit('responds with the updated market list', () => {});

  //       xit('responds to invalid request with 400 status and error message in body', () => {});
  //     });
  //   });
});
