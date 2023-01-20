import express from 'express';
const request = require('supertest');
var server: any;

describe('Image Validation', () => {
  beforeEach(() => {
    server = require('../src/app');
  });

  describe('/images', () => {
    it('It wont return image', async () => {
      const res = await request(server).get('/images');
      expect(res.status).toBe(400);
      expect(res.body.message).toBeDefined();
    });
  });

  describe('/images?..', () => {
    it('It should return resized image (200*200)', async () => {
      const res = await request(server).get('/images?name=smileface&width=200&height=200');
      expect(res.status).toBe(200);
    });
  });

  describe('/images?..', () => {
    it('Release error as the height is not a number', async () => {
      const res = await request(server).get('/images?name=smileface&width=200&height=gf');
      expect(res.status).toBe(400);
    });

    afterEach(() => {
      server.close();
    });
  });
});

describe('/', () => {
  it('It should open the main page', async () => {
    // expect(validateResize());
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});
