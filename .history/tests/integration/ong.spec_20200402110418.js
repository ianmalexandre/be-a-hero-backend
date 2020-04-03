const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe ('ONG', () => {
    beforeEach(() => {

    });

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

        console.log(response.body);
    });
});