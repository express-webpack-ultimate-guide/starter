const appCreator = require("./app"),
    { expect } = require("chai"),
    request = require("supertest");

let app;
describe("General", () => {
    beforeEach(() => {
        app = appCreator();
    });

    describe("GET /", () => {
        it("should return a 200 response", (done) => {
            request(app).get("/")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
    describe("GET /unknownURL", () => {
        it("should return a 404 because the endpoint does not exist", (done) => {
            request(app).get("/unknownURL")
                .end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    done();
                });
        });
    });
});
