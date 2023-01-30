import { expect, server, BASE_URL } from './setup.js';

describe('Index page test', () => {
    it('gets base url', done => {
        server
            .get(`${BASE_URL}/`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal(
                    'Environment variable is coming across.'
                );
                done();
            });
    });
});

describe('About page test', () => {
    it('gets base url', done => {
        server
            .get(`${BASE_URL}/about`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal(
                    'About section'
                );
                done();
            });
    });
});