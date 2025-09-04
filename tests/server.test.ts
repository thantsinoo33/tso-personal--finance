import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { app } from '../server/index';

describe('GET /', () => {
  it('responds with Server running', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Server running');
  });
});
