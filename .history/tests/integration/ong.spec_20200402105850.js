const request = require('supertest');
const app = require('../../src/app');

describe ('ONG', () => {
    it('should be able to create a new ONG', async () => {
        const response = request(app)
        .post('/ongs')
        .send({
            name: "Vira-Lata",
	        email: "contato@viralata.com.br",
	        whatsapp: "6298888888",
	        city: "Goiania",
	        uf: "GO"
        });
    });
});