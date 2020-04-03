const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe ('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    beforeAll(async ()=> {
        await connection.destroy();
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Vira-Lata",
	        email: "contato@viralata.com.br",
	        whatsapp: "6298888888",
	        city: "Goiania",
	        uf: "GO"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        console.log(response.body);
    });
});