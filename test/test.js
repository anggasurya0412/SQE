const request = require("supertest")("https://reqres.in/api/users/2");
const expect = require("chai").expect;
const baseUrl = 'https://reqres.in';
const pathUrl = '/api/users/2';

const Headers = {
    'Content-Type':'application/json'
}

describe("API PATCH", function () {
    const name = "morpheus"
    const job = "QA Engineer"
  it("send request with correct name should success", async function () {
    const response = await request
    .patch(baseUrl+pathUrl)
    .set(Headers)
    .send({
        name: name,
        job: job
    })

    expect(response.status).to.eql(200);
    expect(response.body.name).to.eql(name);
    expect(response.body.job).to.eql(job);
  });
});


