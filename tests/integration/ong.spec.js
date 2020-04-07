import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APADAZ',
      email: 'contat@email.com',
      whatsap: '23244225231',
      city: 'RIO',
      uf: 'SC',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveLength(8);
  });
});
